import { Router} from "express";
import UserRouter from "./user.router.js"
import UploadRouter from "./upload.router.js"


const appRouter = Router();
appRouter.use("/users",UserRouter);
appRouter.use("/upload",UploadRouter)

export {appRouter};