import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";


export const currentChatSlice = createSlice({
    initialState: {},
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
