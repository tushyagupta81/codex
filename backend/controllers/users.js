import User from "../models/user.js";

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

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
};

export { getUserById, getAllUsers, deteleUserById};
