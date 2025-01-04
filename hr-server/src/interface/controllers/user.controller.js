import { login, signup } from "../../application/services/AuthService/AuthService.js";
import { createUserByAdmin, getAllUsers, updateUserById } from "../../application/services/UserService/UserService.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/CatchAsync.js";

export class UserController {

    createUser = catchAsync(async(req,res)=>{
        const { email ,password,fullName} = req.body;
        const newUser = await signup({email,password,fullName});
        return res.status(201).json(newUser);
    })
    loginUser = catchAsync(async (req, res) => {
        const { email, password } = req.body;
        const loginResponse = await login({ email, password });
        return res.status(200).json(loginResponse);
    });
    updateLoginUser = catchAsync(async(req,res,next)=>{
        const userId = req.user._id;
        if(!userId) return next(new AppError("User not found"));
        const updatedUser = await updateUserById(userId,req.body);
        return res.status(200).json(updatedUser);
    })
    getAllUserByAdmin = catchAsync(async(req,res)=>{
        const users = await getAllUsers();
        return res.status(200).json(users);
    })
    createUserByAdmin= catchAsync(async(req,res)=>{
        const user = await createUserByAdmin(req.user._id,req.body);
        return res.status(200).json(user)
    })
}