import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";


export const currentChatSlice = createSlice({
    initialState: {
      _id: "6771e86309ddceab91061dc1",
      fullName: "Doe",
      username: "Ram",
      isAvatar: "",
      avatarColor: "",
      status: "offline",
      lastSeen: "2025-02-23T13:29:12.090Z"

    },
    name: "currentChatSlice",
    reducers: {
      insertCurrentChatData: (state, action)=> {
        return { ...action.payload };
      },
    },
  });






  
  export const getAllChatsByUser = createAsyncThunk("chat", async () => {
    try {
        const res = await axiosInstance.get("/chat/user-allchat");
        return res.data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data?.message || "Chat detail failed");
    }
})
  export const { insertCurrentChatData } = currentChatSlice.actions;
