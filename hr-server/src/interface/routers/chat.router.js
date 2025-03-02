import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
const userController = new UserController();
const router = Router();

router
.route("/user-allchat")
.get(userController.getAllChats);
router
.route("/current-chat").get(userController.getCurrentChat)


export default router