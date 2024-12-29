import { DEFAULT_PASSWORD } from "../../../config/index.js";
import { User } from "../../../domain/models/UserModel.js";
import AppError from "../../../interface/utils/AppError.js";

export const createUserByAdmin = async (userId, userData) => {
  const admin = await User.findById({_id:userId});
  if(!admin) throw new AppError("Access denied",404)
  const { fullName, email, phoneNumber, department, jobApplication } = userData;
  const userExists = await User.findOne({ email });
  if (userExists) throw new AppError("User already exist", 400)
  const newUser = await User.create({
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    password: DEFAULT_PASSWORD,
    department: department,
    jobApplication: jobApplication,
    role: "temp"
  })
  if (!newUser) throw new AppError("Failed to create User", 404)
  return newUser;
}
export const getAllUsers = async (userId) => {
  const currentUserId = userId;
  const users = await User.find({
    role: { $nin: ['admin', 'hr'] },
    _id: { $ne: currentUserId }
  })
    .select('-password');
  if (!users.length) {
    throw new AppError("No User found", 404)
  }
  return users;

}
export const getUserById = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) throw new AppError("User not found", 404);
  return user;
}
