import { Router } from "express";
import {updateUser, deleteUser, getUser, followUser, unFollowUser, getFriends} from "../controller/userController.js";

const userRouter=Router();

userRouter.route("/update/:id").put(updateUser);
userRouter.route("/delete/:id").delete(deleteUser);
userRouter.route("/").get(getUser);
userRouter.route("/:id/follow").put(followUser);
userRouter.route("/:id/unfollow").put(unFollowUser);
userRouter.route("/friends/:userId").get(getFriends);

export default userRouter;
