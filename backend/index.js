import express from "express";
import userRouter from "./routes/users.js";
import { connectMongo } from "./connection.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 8080;

connectMongo("mongodb://127.0.0.1:27017/hacktu");

app.listen(PORT);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());

app.use("/users", userRouter);
