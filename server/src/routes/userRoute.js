import express from "express";
import {
  getAdmin,
  login,
  logout,
  signUp,
} from "../controller/userController.js";
import upload from "../services/multer.js";
import { isAuthenticated } from "../middleware/authUser.js";

const userRouter = express.Router();

userRouter.post("/signup", upload.single("photo"), signUp);

userRouter.post("/login", login);

userRouter.post("/logout", logout);

userRouter.get("/getAdmin", isAuthenticated, getAdmin);

export default userRouter;
