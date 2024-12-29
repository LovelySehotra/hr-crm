import { decodeToken } from "../../application/services/AuthService/JwtService.js";
import { User } from "../../domain/models/UserModel.js";

export async function userDeserializer(req, res, next) {
    const accessToken = req.headers.authorization?.split("Bearer ")[1];
    if (!accessToken) return next();
    const payload = await decodeToken(accessToken);
    const user = await User.findById(payload.userId).select("-password");
    req.user = user;
    return next()
}