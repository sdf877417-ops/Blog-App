import blogModel from "../models/Blog.Model.js";
import userModel from "../models/user.Model.js";
import cloudinary from "../services/cloudinary.js";

const createBlog = async (req, res) => {
  try {
    const { title, category, about, adminPhoto } = req.body;
    if (!title || !category || !about) {
      return res.status(400).json({ message: "all fields are required !" });
    }

    console.log(`value in req.file: `, req.file);

    const adminName = req?.user?.adminName;
    // const adminPhoto = req?.user?.adminPhoto;
    const createdBy = req?.user?._id;

    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(`value in result: `, result);

    console.log(`value in result.secure_url : `, result.secure_url);

    // creating data at database
    const createBlog = await blogModel.create({
      title,
      about,
      category,
      adminName,
      adminPhoto: adminPhoto,
      createdBy,
      blogImage: {
        publicId: result.public_Id,
        url: result.secure_url,
      },
    });
    console.log(`value in req.user:`, req.user);

    return res.status(200).json({
      mesage: "blog created  succesfully ! ",
      createBlog,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "internal server error ", error: err.message });

    console.error("error : ", err.message);
  }
};

const getOneBlog = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`value in req.params:`, req.params.id);
    const data = await blogModel.findById(id);

    if (!data) {
      return res.status(400).json({ message: "cannjot get blog" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("erorr :", error.message);
  }
};

const deleteBlog = async (req, res) => {
  try {
    console.log(`value in req.user :`, req.user);
    const del = await blogModel.findByIdAndDelete(req.params.id);
    console.log(`value in del :`, del);
    if (!del) {
      return res.status(400).json({ message: "blog is not deleted" });
    }

    return res.status(200).json({ message: "blog is deleted !" });
  } catch (error) {
    console.error("erorr :", error.message);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, category, about } = req.body;

    const updData = { title, category, about };

    const result = await cloudinary.uploader.upload(req?.file?.path);

    const upd = await blogModel.findByIdAndUpdate(
      req.params.id,
      { title, category, about, blogImage: result.secure_url },

      { new: true },
    );

    if (upd) {
      return res.status(200).json({ upd });
    }
  } catch (error) {
    console.error("error :", error.message);
    return res.status(500).json({ message: "internal server error " });
  }
};

// allblogs

const getAllBlogs = async (req, res) => {
  try {
    const allData = await blogModel.find();
    if (!allData) {
      return res.status(400).json({ message: "connot get data " });
    }

    return res.status(200).json(allData);
  } catch (error) {
    console.error("error :", error.message);
  }
};

// my blogs

const getMyBlog = async (req, res) => {
  try {
    console.log(`value in req.user`, req.user);
    const userblog = req.user._id;

    const myBlog = await blogModel.find({ createdBy: userblog });

    if (!myBlog) {
      return res.status(400).json({ message: "connt get my blog" });
    }
    return res.status(200).json(myBlog);
  } catch (error) {
    console.error("erorr :", error.message);
  }
};

const updateUser = async (req, res) => {
  const {} = req.body;
  try {
    const upd = await userModel.findByIdAndUpdate(req.params.id, req.body);
    console.log(`value in upd`, upd);
    return res.status(200).json(upd || "updating ");
  } catch (error) {
    console.error("error :", error.message);
  }
};

export {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlogs,
  getOneBlog,
  getMyBlog,
  updateUser,
};
