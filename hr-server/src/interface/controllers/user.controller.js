import { login, signup } from "../../application/services/AuthService/AuthService.js";
import { createAccessToken, decodeToken, exchangeRefreshTokenForAccess } from "../../application/services/AuthService/JwtService.js";
import { currentChatData } from "../../application/services/ChatService/ChatService.js";
import { createUserByAdmin, getAllChatsByUser, getAllUsers, getUserById, updateUserById } from "../../application/services/UserService/UserService.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/CatchAsync.js";

export class UserController {

    createUser = catchAsync(async (req, res) => {
        const { email, password, fullName } = req.body;
        const newUser = await signup({ email, password, fullName });
        return res.status(201).json(newUser);
    })
    loginUser = catchAsync(async (req, res) => {
        const { email, password } = req.body;
        const loginResponse = await login({ email, password });
        return res.status(200).json(loginResponse);
    });
    updateLoginUser = catchAsync(async (req, res, next) => {
        const userId = req.user._id;
        if (!userId) return next(new AppError("User not found"));
        const updatedUser = await updateUserById(userId, req.body);
        return res.status(200).json(updatedUser);
    })
    getLoginUser = catchAsync(async (req, res, next) => {
        const userId = req.user._id;
        if (!userId) return next(new AppError("Access token is invalid"));
        const user = await getUserById(userId);
        return res.status(200).json(user)
    })
    getAllUserByAdmin = catchAsync(async (req, res) => {
        const users = await getAllUsers();
        return res.status(200).json(users);
    })
    createUserByAdmin = catchAsync(async (req, res) => {
        const user = await createUserByAdmin(req.user._id, req.body);
        return res.status(200).json(user)
    })
    refreshAccessToken = catchAsync(async (req, res, next) => {
        const { refreshToken } = req.body;
        console.log(refreshToken)
        if (!refreshToken) return next(new AppError("Refresh token is invalid"));
        const accessToken = await exchangeRefreshTokenForAccess(refreshToken);
        // res.cookie("accessToken", accessToken, {
        //     maxAge: 60 * 60 * 1000, //1 hour
        //     httpOnly: true
        // });
        res.status(200).json(accessToken)

    })
    getAllChats = catchAsync(async (req, res, next) => {
        // console.log(req.user)
        // const  userId  = req?.user?._id;
        const chats = await getAllChatsByUser("67717e9dcb8f79a39768fa6f");
        res.status(200).json(chats)
    })
    getCurrentChat =catchAsync(async(req,res,next)=>{
       
        const {me,to} = req.query;
        const chatData = await currentChatData(me,to);
        res.status(200).json(chatData)
    })
}