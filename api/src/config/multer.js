import multer from "multer";
import path from "path";

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // where files will be stored   
  },
  filename: (req, file, cb) => {
    // unique filename (VERY IMPORTANT)
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// file filter (optional but recommended)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
});