import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import userModel from "../models/user.Model.js";
import blogModel from "../models/Blog.Model.js";

export const superAdmin = (req, res) => {
  console.log(`superAdmin request `);
  console.log(
    process.env.SUPERADMINEMAIL,
    process.env.SUPERADMINPASSWORD,
    process.env.SUPERADMINROLE,
  );
  const { email, password, role } = req.body;
  try {
    if (!email || !password || !role) {
      return res.status(400).json({ mesage: "all fileds are required !" });
    }

    if (
      email !== process.env.SUPERADMINEMAIL ||
      password !== process.env.SUPERADMINPASSWORD ||
      role !== process.env.SUPERADMINROLE
    ) {
      return res.status(400).json({ mesage: "your not  superAdmin" });
    }

    // token creation
    const id = Date.now();
    const token = jwt.sign(
      { id: id, email: email },
      process.env.JKWT_SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.cookie(token, "adminToken");

    return res.status(200).json({
      mesage: "welcome respected superAdmin",
      user: {
        email: process.env.SUPERADMINEMAIL,
        password: process.env.SUPERADMINPASSWORD,
        role: process.env.SUPERADMINROLE,
      },
    });
  } catch (error) {
    console.error("eror ++-->", error.message);
  }
};

export const updateDataBySuperAdmin = async (req, res) => {
  try {
    console.log(`value in req.param.id`, req.params.id);

    const del = await userModel.findByIdAndDelete(req.params.id);

    if (!del) {
      return res.status(400).json({ message: "cannot delete !" });
    }

    return res.status(200).json({ message: "user deleted", user: del });
  } catch (error) {
    console.log("erorr ---->", error.message);
  }
};

export const deleteBlogBySuperAdmin = async (req, res) => {
  try {
    console.log(`value in req.param.id`, req.params.id);

    const del = await blogModel.findByIdAndDelete(req.params.id);

    if (!del) {
      return res.status(400).json({ message: "cannot delete  blog why !" });
    }

    return res.status(200).json({ message: "blog deleted"});
  } catch (error) {
    console.log("erorr ---->", error.message);
  }
};
