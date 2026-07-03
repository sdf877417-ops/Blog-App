import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      unique: true,
      required: true,
      type: String,
    },
    phone: {
      required: true,
      type: Number,
      unique: true,
    },
    photo: {
      type: String,
    },
    education: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
