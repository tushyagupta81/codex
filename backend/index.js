import express from "express";
import mongoose from "mongoose";

const mongodb = mongoose
  .connect("mongodb://127.0.0.1:27017/hacktu")
  .then(() => console.log("mongoDb connectd"))
  .catch((err) => console.log("MongoDb err", err));

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", userSchema);

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

app
  .route("/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.json({ message: "User does not exist" });
    }
    res.json(user);
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "User deleted" });
  });

app.post("/users", async (req, res) => {
  const { firstName, lastName, email, gender } = req.body;
  if (!firstName || !email || !gender) {
    return res.json({ message: "First name, email and gender are required" });
  }
  const result = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
  }).catch((err) => {
    return res.status(401).json({ error: err });
  });
  res.status(201).json({ message: "User created" });
});

app.listen(PORT);
