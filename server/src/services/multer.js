// import multer from "multer";

// const storge = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/uploads");
//   },
//   filename: (req, file, cb) => {
//     const fName = Date.name() + "_" + file.originalname;
//     cb(null, fName);
//   },
// });

// const multerUpload = multer({
//   storage:storge
// });

// export default multerUpload;

// chst
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

// export const multerUploads = upload.fields([
//   { name: "blogImage", maxCount: 1 },
//   { name: "adminPhoto", maxCount: 1 },
// ]);

export default upload;
