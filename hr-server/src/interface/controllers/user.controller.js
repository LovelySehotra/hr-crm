import { login, signup } from "../../application/services/AuthService/AuthService.js";
import { createUserByAdmin, getAllUsers } from "../../application/services/UserService/UserService.js";
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
    getAllUserByAdmin = catchAsync(async(req,res)=>{
        const users = await getAllUsers();
        return res.status(200).json(users);
    })
    createUserByAdmin= catchAsync(async(req,res)=>{
        const user = await createUserByAdmin(req.user._id,req.body);
        return res.status(200).json(user)
    })
}