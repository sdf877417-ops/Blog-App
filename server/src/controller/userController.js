import createTokenandCookie from "../middleware/createToken&Cookie.js";
import cookie from "cookie-parser";
import userModel from "../models/user.Model.js";
import cloudinary from "../services/cloudinary.js";
import { comparePassword, hashPassword } from "../services/HashPassword.js";

const signUp = async (req, res) => {
  console.log(`reqqust aayi `);
  try {
    const { name, email, password, phone, education, role } = req.body;

    if (!name || !email || !password || !education || !role || !phone) {
      return res.status(400).json({ message: "all fields are required !" });
    }

    const alreadyExists = await userModel.findOne({ email });

    if (alreadyExists) {
      return res.status(400).json({ message: "user already exists !" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    // console.log(`value in req.file: `, req.file);
    // console.log(`value in result : `, result);
    console.log(`value in result.secure_url : `, result.secure_url);

    const hashedPass = await hashPassword(password);

    // creating data at database
    const create = await userModel.create({
      name,
      email,
      password: hashedPass,
      role,
      phone,
      education,
      photo: result.secure_url,
    });
    if (create) {
      const token = await createTokenandCookie(create._id, res);
      console.log(`value inn create_id`, create._id);
      console.log(`value in token :`, token);

      console.log(`value in req.file :`, req.file);

      return res.json({
        mesage: "user register succesfully ! ",
        user: create.email,
        token: token,
      });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "internal server error ", error: err.message });
    console.error("error : ", err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!password || !email || !role) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const existUser = await userModel.findOne({ email });

    if (!existUser) {
      return res.status(400).json({ message: "user not found !" });
    }

    const isMatch = await comparePassword(password, existUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    if (role !== existUser.role) {
      return res
        .status(400)
        .json({ message: `user with this role ${role} is not found` });
    }

    const token = await createTokenandCookie(existUser._id, res);
    console.log(`login value in token :`, token);

    return res.status(200).json({
      message: "welcome User ",
      user: existUser,
      token: token,
    });
  } catch (error) {
    console.error("error : ", error.message);
  }
};

const logout = async (req, res) => {
  try {
    console.log(` logout value inn req.user `, req.user);
    res.clearCookie("token", { httpOnly: true });

    return res.status(200).json({ message: "logout successfulll" });
  } catch (error) {
    console.error("eror :", error.message);
  }
};

const getAdmin = async (req, res) => {
  try {
    const admins = await userModel.find({ role: "admin" });
    if (!admins) {
      return res.status(400).json({ message: "cannot get admins " });
    }
    return res.status(200).json(admins);
  } catch (error) {
    console.error("erorr :", error.message);
  }
};

const getMyProfile = async (req, res) => {
  try {
    console.log(`value in req.user:`, req.user._id);
    // const numId= Number(req.user._id)
    // console.log(`value in numId :`, numId);
    if (!req.user) {
      return res
        .status(400)
        .json({ message: "login first and get verified !" });
    }

    const getById = await userModel.findOne(req.user._id);
    // console.log(`your profile is  getMypfole :`, getById);

    return res.status(200).json(req.user);
  } catch (error) {
    console.error("error ", error.message);
  }
};

export { signUp, login, logout, getAdmin, getMyProfile };
