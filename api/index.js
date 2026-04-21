import dotenv from 'dotenv';
import connectMongoDB from './src/config/database.js';
import cors from "cors";
import app from './src/app.js';

dotenv.config({
    path:'./.env'
});

    app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

const startServer=async()=>{

    try{
        await connectMongoDB();
        app.on("error", (error)=>{
            console.log("error", error);
            throw error;
        });
        app.listen(8800,()=>{
            console.log("server is running");
        });
    }
    catch(error){
        console.log("db connection failed", error);
    }
}
startServer();