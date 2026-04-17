import express from "express";
import { upload } from "../config/multer.js";

const uploadRouter = express.Router();

// POST /api/v1/upload
uploadRouter.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json({
      message: "File uploaded successfully",
      filename: req.file.filename,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

export default uploadRouter;