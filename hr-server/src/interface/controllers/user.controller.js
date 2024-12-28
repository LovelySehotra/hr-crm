import { login, signup } from "../../application/services/AuthService/AuthService.js";
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
}