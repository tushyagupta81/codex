import User from "../models/user.js";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

export function userVerification(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);
    if (user) {
      return res.json({ status: true, user: user.email, id: data.id });
    } 

    return res.json({ status: false });
  });
}
