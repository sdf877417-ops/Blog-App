import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getMyBlog,
  getOneBlog,
  updateBlog,
} from "../controller/blog.Controller.js";

import { isAdmin, isAuthenticated } from "../middleware/authUser.js";
import upload from "../services/multer.js";

const blogRoute = express.Router();

// only authenticated user can create blog

blogRoute.post(
  "/post",
  upload.single("blogImage"),
  isAuthenticated, // for checking login or not
  isAdmin("admin"), // only admi can create bnlog
  createBlog,
);

blogRoute.get("/getOne/:id", isAuthenticated, getOneBlog);

blogRoute.delete("/delete/:id", isAuthenticated, isAdmin("admin , superAdmin"), deleteBlog);

blogRoute.put(
  "/update/:id",
  isAuthenticated,
  isAdmin("admin"),
  upload.single("blogImage"),
  updateBlog,
);

// blogRoute.get("/getAllBlogs", isAuthenticated, getAllBlogs);
blogRoute.get("/getAllBlogs", getAllBlogs);

blogRoute.get("/myBlog", isAuthenticated, getMyBlog);

export default blogRoute;
