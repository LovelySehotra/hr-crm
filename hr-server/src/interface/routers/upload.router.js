import { Router } from "express";
import { UploadsController } from "../controllers/upload.controller.js";
import { uploadImage } from "../../application/services/UploadService/UploadService.js";
const uploadController = new UploadsController();
const router = Router();

router
.route("/images")
.post(uploadImage.single("image"),uploadController.handleNewImageUpload)

export default router;