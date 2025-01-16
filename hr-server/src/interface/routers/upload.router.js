import { Router } from "express";
import { UploadsController } from "../controllers/upload.controller.js";
import { uploadImage, uploadPdfFile } from "../../application/services/UploadService/UploadService.js";
const uploadController = new UploadsController();
const router = Router();

router
.route("/images")
.post(uploadImage.single("image"),uploadController.handleNewImageUpload)

.route("/files")
.post(uploadPdfFile.single("files"),uploadController.handleNewFileUpload)



export default router;