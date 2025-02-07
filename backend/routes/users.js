import { Router } from "express";
import { login, signup } from "../controllers/auth.js";
import {
  deteleUserById,
  getAllUsers,
  getUserById,
} from "../controllers/users.js";
import { getUserId } from "../util/getUserId.js";
import { userVerification } from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.get("/:id", userVerification, getUserById);
userRouter.delete("/:id", userVerification, deteleUserById);
userRouter.get("/", userVerification, getAllUsers);

userRouter.route("/").post(getUserId);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;
