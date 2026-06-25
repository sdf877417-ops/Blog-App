import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  blogImage: {
    publicId: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  adminName: {
    type: String,
  },
  category: {
    type: String,
  },
  adminPhoto: {
    type: String,
  },
  about: {
    type: String,
    // minLength: [200, "should contain 200 leters only "],
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

const blogModel = mongoose.model("BlogModel", blogSchema);

export default blogModel;
