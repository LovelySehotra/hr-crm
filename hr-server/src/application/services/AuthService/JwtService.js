import { JWT_SECRET } from "../../../config/index.js";
import jwt from "jsonwebtoken";
import AppError from "../../../interface/utils/AppError.js";


export const createAccessToken = async (userId) => {
    try {
        const token = jwt.sign({ userId }, JWT_SECRET, {
            expiresIn: "2h",
        });
        return token;
    } catch (error) {
        return new AppError("Something went wrong",401)
    }
  
}

export const createRefreshToken = async (userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "1y",
    });
    return token;
}

export const exchangeRefreshTokenForAccess = async (refreshToken) => {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    return createAccessToken(decoded.userId);
}

export const decodeToken = async (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        if(!decoded) return new AppError("User token is invalid",401)
        return decoded;
    } catch (error) {
      return new AppError("UnAuthorized::Token is invalid",401)
    }
}
