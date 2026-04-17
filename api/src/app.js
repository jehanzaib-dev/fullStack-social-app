import express from 'express';

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
import uploadRouter from "./routes/uploadRoutes.js";
import path from "path";



const app=express();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
// serve images statically
app.use("/images", express.static(path.join(process.cwd(), "public/images")));

// upload route
app.use("/api/v1/upload", uploadRouter);


export default app;