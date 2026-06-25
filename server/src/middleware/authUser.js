import cookie from "cookie-parser";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import userModel from "../models/user.Model.js";
import req from "express-cookie/lib/request.js";
config();

// autyhentication

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ messaage: "user in not verified" });
    }

    console.log(`at authenicated token : `, req.cookies);

    const decoded = jwt.verify(token, process.env.JKWT_SECRET_KEY);
    console.log(`value in decoded : `, decoded);

    const create = await userModel.findById(decoded.id);
    console.log(`value in crete in middleware :`, create);

    if (!create) {
      return res.status(400).json({ messaage: "user not found" });
    }
    req.user = create;

    next();
  } catch (error) {
    console.error("error :", error.message);
  }
};

// authorization

const isAdmin =  (...roles) => {
  console.log(`value in ...role `, roles);
  console.log(`value in req.user.role`, req.user);
  try {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res
          .status(400)
          .json({
            message: `user with this role ${req.user.role} is not found`,
          });
      }
      next()
    };
  } catch (error) {
    console.error("error :", error.message);
  }
};

export { isAuthenticated , isAdmin};
