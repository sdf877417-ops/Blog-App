import mongoose from "mongoose";

const connectDB = async (dburl) => {
  try {
    const conn = await mongoose.connect(dburl);
    if (conn) {
      //   console.log(`database connected successfully :`);
    }
  } catch (err) {
    console.error("error : ", err.message);
  }
};

export default connectDB;
