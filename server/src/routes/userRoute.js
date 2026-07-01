import express from "express";
import {
  getAdmin,
  getCreator,
  getMyProfile,
  login,
  logout,
  signUp,
} from "../controller/userController.js";
import upload from "../services/multer.js";
import { isAdmin, isAuthenticated } from "../middleware/authUser.js";
import { updateUser } from "../controller/blog.Controller.js";

const userRouter = express.Router();

userRouter.post("/signup", upload.single("photo"), signUp);

userRouter.post("/login", login);

userRouter.post("/logout", logout);

userRouter.get("/getAdmin", isAuthenticated, getAdmin);

userRouter.get("/getMyProfile", isAuthenticated, getMyProfile);

userRouter.get('/getcreator/:id',getCreator)

userRouter.put(
  "/updateUser/:id",
  isAuthenticated,
  isAdmin("admin"),
  updateUser,
);

export default userRouter;
