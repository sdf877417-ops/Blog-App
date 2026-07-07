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
import {
  isAdmin,
  isAuthenticated,
  isSuperAdmin,
} from "../middleware/authUser.js";
import { updateUser } from "../controller/blog.Controller.js";

import { deleteBlogBySuperAdmin, getAllUsers, superAdmin, updateDataBySuperAdmin } from "../controller/superAdminController.js";

const userRouter = express.Router();

userRouter.post("/signup", upload.single("photo"), signUp);

userRouter.post("/login", login);


userRouter.post("/logout", logout);

userRouter.get("/getAdmin", isAuthenticated, getAdmin);

userRouter.get("/getMyProfile", isAuthenticated, getMyProfile);

userRouter.get("/getcreator/:id", getCreator);

userRouter.put("/updateUser/:id",isAuthenticated,isAdmin("admin"),updateUser,
);


// super admin ropute
userRouter.post("/login/superAdmin", superAdmin);

userRouter.get("/getAllUsers",getAllUsers)

userRouter.delete("/delete/superAdmin/:id", updateDataBySuperAdmin);

userRouter.delete("/delete/superAdmin/blog/:id", deleteBlogBySuperAdmin);

export default userRouter;