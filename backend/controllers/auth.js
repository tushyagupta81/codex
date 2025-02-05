import User from "../models/user.js";
import { createSecretToken } from "../util/SecretToken.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      gender,
      bio,
      password,
      phone,
      primaryCondition,
      emergencyContact,
      emergencyPhone,
      emergencyRelation,
    } = req.body;
    if (!firstName || !email || !gender || !password) {
      return res.json({ message: "First name, email and gender are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const result = await User.create({
      firstName: firstName,
      lastName: lastName,
      password: password,
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
    });

    const token = createSecretToken(result._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, result });
    next();
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};

export { signup, login };
