import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
const userController = new UserController();
const router = Router();

router
.route("/register")
.post(userController.createUser);
router
.route("/login").
post(userController.loginUser);
router
.route("/")
.get(userController.getLoginUser)
.patch(userController.updateLoginUser)

router
.route("/refresh-token")
.post(userController.refreshAccessToken)
router
.route("/candidate")
.post(userController.createUserByAdmin);
router
.route("/candidate")
.get(userController.getAllUserByAdmin);

export default router