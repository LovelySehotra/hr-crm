import { Router} from "express";
import UserRouter from "./user.router.js"


const appRouter = Router();
appRouter.use("/users",UserRouter);

export {appRouter};