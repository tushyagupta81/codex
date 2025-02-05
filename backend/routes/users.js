import { Router } from "express";
import { login, signup } from "../controllers/auth.js";
import {
  deteleUserById,
  getAllUsers,
  getUserById,
} from "../controllers/users.js";
import { userVerification } from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.route("/:id").get(getUserById).delete(deteleUserById);

userRouter.route("/").get(getAllUsers).post(userVerification);

userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;
