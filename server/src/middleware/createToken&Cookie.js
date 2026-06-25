import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import { config } from "dotenv";
import userModel from "../models/user.Model.js";
config();

const createTokenandCookie = async (id, res) => {
  try {
    const token = jwt.sign({ id }, process.env.JKWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    // console.log(`toke generate or not`,token);
    // cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      samesite: "strict",
    });

    const upd = await userModel.findByIdAndUpdate(id, { token });

    return token;
  } catch (error) {
    console.error("err or on createtok :", error.message);
  }
};

export default createTokenandCookie;
