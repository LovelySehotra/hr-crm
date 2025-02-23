import { DEFAULT_PASSWORD } from "../../../config/index.js";
import { ChatModel } from "../../../domain/models/ChatModel.js";
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
export const getUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) return new AppError("User not found", 404);
  return user;
}
export const updateUserById = async(userId,userData)=>{
try {
  const user = await User.findById(userId);
  if(!user) return  new AppError("User not found",404);
  const updatedUser = await User.findByIdAndUpdate(user._id,userData,{new:true});
  return updatedUser
} catch (error) {
  return new AppError("Failed to update user",404)
}
}
export const getAllChatsByUser = async(userId)=>{
  try {
    const {allChats} = await User.findOne({_id:userId},{allChats:1,_id:0}).populate({
      path:"allChats",
      select:"fullName username avatarColor isAvatar profile.privacy.profilePhoto"
    })
    if (allChats.length <= 0) {
      return [];
    }
    const modifiedChats = await Promise.all(
      allChats.map(async(user)=>{
        const getMessages = await ChatModel.findOne({
          chatWithin:{$all:[user.id,userId]},

        },
        {
          messages:1,
          _id:0
        }
      );
      return{
        message:getMessages?.messages[getMessages?.messages.length-1]?.message,
        user,timestamp:getMessages?.messages[getMessages?.messages.length-1]?.timestamp,
      }
      })
    )
    return modifiedChats;
  } catch (error) {
    // return res.status(500).send(error.message);
    return new AppError("Failed to get all Chat",500)
  }
}
