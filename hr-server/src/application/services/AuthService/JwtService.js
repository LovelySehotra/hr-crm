import { JWT_SECRET } from "../../../config/index.js";
import jwt from "jsonwebtoken";
import AppError from "../../../interface/utils/AppError.js";


export const createAccessToken = async (userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "2h",
    });
    return token;
}

export const createRefreshToken = async (userId) => {
    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "1y",
    });
    return token;
}

export const exchangeRefreshTokenForAccess = async (refreshToken) => {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    return this.createAccessToken(decoded.userId);
}

export const decodeToken = async (token) => {
    const decoded = jwt.verify(token, JWT_SECRET)
    if(!decoded) throw new AppError("User token is invalid",401)
    return decoded;
}
