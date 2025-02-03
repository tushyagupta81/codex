import { Router } from "express";

import {
  deteleUserById,
  getAllUsers,
  createUser,
  getUserById,
} from "../controllers/users.js";

const userRouter = Router();

userRouter
  .route("/:id")
  .get(getUserById)
  .delete(deteleUserById);

userRouter
  .route("/")
  .post(createUser)
  .get(getAllUsers);

export default userRouter;
