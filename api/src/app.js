import express from 'express';

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
import uploadRouter from "./routes/uploadRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';


const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
// serve images statically
app.use("/images", express.static(path.join(process.cwd(), "public/images")));

// upload route
app.use("/api/v1/upload", uploadRouter);


export default app;