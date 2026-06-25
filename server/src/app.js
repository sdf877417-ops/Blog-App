import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import multer from "multer";
import blogRoute from "./routes/blog.Route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

connectDB(process.env.DBURL);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRoute);

export default app;
