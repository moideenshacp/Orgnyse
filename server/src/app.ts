import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db"

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.FRONT_URL,
    methods: ["GET","POST","PUT","PATCH"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
