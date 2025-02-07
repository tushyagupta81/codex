import express from "express";
import userRouter from "./routes/users.js";
import { connectMongo } from "./connection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
  path: "/chatroom/socket.io"
});
const PORT = 8080;


connectMongo("mongodb://127.0.0.1:27017/hacktu");

// app.listen(PORT);

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

io.of("/chatroom").on("connection", (socket) => {
  console.log("hello user");
  socket.emit("message","hello");
  socket.on("message",(msg) => console.log(msg));
});

server.listen(PORT);

app.get('/', (req, res) => {
    res.send('Server is running...');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

// app.listen(PORT);
