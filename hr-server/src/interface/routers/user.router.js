import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
const userController = new UserController();
const router = Router();

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser)

export default router