import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";


export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    // Current Chat State
    currentChat: {
      _id: "",
      fullName: "",
      username: "",
      isAvatar: "",
      avatarColor: "",
      status: "offline",
      lastSeen: "",
    },
    // All Chats State
    allChats: {
      chats: [],
      isLoading: false,
      error: null,
    },
    // Messages State
    messages: {
      list: [],
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    // **Set Current Chat**
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    clearCurrentChat: (state,action) => {
      state.currentChat = action.payload;
    },
    // **Add a new chat to the chat list**
    addChat: (state, action) => {
      state.allChats.chats.push(action.payload);
    },
    // **Remove a chat from the chat list**
    removeChat: (state, action) => {
      state.allChats.chats = state.allChats.chats.filter((chat) => chat._id !== action.payload);
    },
    // **Add a new message to the chat**
    addMessage: (state, action) => {
      state.messages.list.push(action.payload);
    },
    // **Clear messages when switching chats**
    clearMessages: (state) => {
      state.messages.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // **Get All Chats**
      .addCase(getAllChatsByUser.pending, (state) => {
        state.allChats.isLoading = true;
      })
      .addCase(getAllChatsByUser.fulfilled, (state, action) => {
        console.log("here is state",action)
        state.allChats.isLoading = false;
        state.allChats.chats = action.payload;
        console.log("state",state)
      })
      .addCase(getAllChatsByUser.rejected, (state, action) => {
        state.allChats.isLoading = false;
        state.allChats.error = action.payload;
      })
      // **Fetch Messages**
      .addCase(fetchMessages.pending, (state) => {
        state.messages.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages.isLoading = false;
        state.messages.list = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.messages.isLoading = false;
        state.messages.error = action.payload;
      });
  },
});
// **Async Thunk to Fetch All Chats**
export const getAllChatsByUser = createAsyncThunk(
  "chats/getAllChats",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/chat/user-allchat");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch chats");
    }
  }
);

// **Async Thunk to Fetch Messages of a Chat**
export const fetchMessages = createAsyncThunk(
  "chats/fetchMessages",
  async (chatId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/chat/messages/${chatId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch messages");
    }
  }
);
export const getCurrentChatData = createAsyncThunk("chat/currentChatData",async(data, { rejectWithValue })=>{
  try {
    const res = await axiosInstance.get(`/chat/current-chat?me=${data.me}&to=${data.to}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch messages");
  }
})


// **Export Actions**
export const {
  setCurrentChat,
  clearCurrentChat,
  addChat,
  removeChat,
  addMessage,
  clearMessages,
} = chatSlice.actions;

// **Export Reducer**
export default chatSlice.reducer;
