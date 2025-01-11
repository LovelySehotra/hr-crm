import multer from "multer";
import path from "path";
// import { PathLike } from "fs";
import { promises as fs } from "fs";
import { UPLOADS_PATH } from "../../../config/env.config.js";

async function createDirIfNotExists(directory) {
    fs.access(directory).catch(() => {
        fs.mkdir(directory, { recursive: true });
    });
}
const imagesPath = path.resolve(UPLOADS_PATH, "./images");
const filePath = path.resolve(UPLOADS_PATH, "./files");
createDirIfNotExists(imagesPath);
createDirIfNotExists(filePath);

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, imagesPath);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  });

  function ensureIsSupported(file, cb, fileTypes) {
    const extension = fileTypes.test(path.extname(file.originalname));
    if (extension) {
      return cb(null, true);
    } else {
      cb("Not Supported");
    }
  }
  export const uploadImage = multer({
    dest: imagesPath,
    storage: imageStorage,
    fileFilter: function (req, file, cb) {
      ensureIsSupported(file, cb, /jpg|jpeg|png|heic|webp/);
    },
  });