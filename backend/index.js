import express from "express";
import userRouter from "./routes/users.js";
import { connectMongo } from "./connection.js";

const app = express();
const PORT = 8080;

connectMongo("mongodb://127.0.0.1:27017/hacktu");

app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT);
