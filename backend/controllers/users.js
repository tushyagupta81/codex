import mongoose from "mongoose";
import userSchema from "../models/user.js";

const User = mongoose.model("user", userSchema);

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.json({ message: "User does not exist" });
  }
  res.json(user);
};

const deteleUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: "User deleted" });
};

const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    gender,
    bio,
    phone,
    primaryCondition,
    emergencyContact,
    emergencyPhone,
    emergencyRelation,
  } = req.body;
  if (!firstName || !email || !gender) {
    return res.json({ message: "First name, email and gender are required" });
  }
  const result = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    bio: bio,
    medical: {
      primaryCondition: primaryCondition,
    },
    emergencyContact: {
      name: emergencyContact,
      relation: emergencyRelation,
      phone: emergencyPhone,
    },
    gender: gender,
  }).catch((err) => {
    return res.status(401).json({ error: err });
  });
  res.status(201).json({ message: result });
};

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
};

export { getUserById, getAllUsers, deteleUserById, createUser };
