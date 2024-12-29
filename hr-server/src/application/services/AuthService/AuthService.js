import { User } from "../../../domain/models/UserModel.js"
import AppError from "../../../interface/utils/AppError.js";
import { createAccessToken, createRefreshToken } from "./JwtService.js";
import bcrypt from "bcrypt";
export const signup = async (userData) => {
    const userExists = await User.findOne({ email: userData.email });
    if (userExists) throw new AppError("User already exist", 401)
    const newUser = await User.create(userData);
    newUser.password = undefined
    const accessToken = await createAccessToken(newUser._id);
    const refreshToken = await createRefreshToken(newUser._id)
    return { newUser, accessToken, refreshToken };
}
export const login = async (loginCredentials) => {
    const { email, password } = loginCredentials;
    console.log(email,password)
    const user = await User.findOne({ email }).select("password");
    if (!user) throw new AppError('User not found', 404);
    if (password && !(await bcrypt.compare(password, user.password)))
        throw new AppError("Invalid Credentails", 400)
    const accessToken = await createAccessToken(user._id);
    const refreshToken = await createRefreshToken(user._id)
    user.password = undefined
    return { user, accessToken, refreshToken };
}
