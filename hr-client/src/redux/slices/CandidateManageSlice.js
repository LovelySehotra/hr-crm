import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";
const getUserInfoFromStorage = () => {
    const candidateInfo = localStorage.getItem('candidateInfo');
    return candidateInfo && candidateInfo !== "undefined" ? JSON.parse(candidateInfo) : null;
};
const initialState = {
    candidateInfo: getUserInfoFromStorage(),
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}
const candidateManageSlice = createSlice({
    name: 'candidateManage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getAllCandidates.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllCandidates.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userInfo = action.payload;
                localStorage.setItem('candidateInfo', JSON.stringify(action.payload)); 
            })
            .addCase(createUserByAdmin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(createUserByAdmin.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createUserByAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userInfo = action.payload;
                localStorage.setItem('userInfo', JSON.stringify(action.payload)); // Save to localStorage
            });
          
    }
})
export const getAllCandidates = createAsyncThunk("candidate/getAll", async (data, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get("/users/candidate", data);
        return res.data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data?.message || "Get detail  failed");
    }
})
export const createUserByAdmin = createAsyncThunk("candidate/create",async(data,{rejectWithValue})=>{
    try {
        const res = await axiosInstance.post("/users/candidate", data);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data?.message || "Create Admin  failed");
    }
})
export const uploadImage = createAsyncThunk("upload/image",async(data,{rejectWithValue})=>{
    try {
        const res = await axiosInstance.post("/upload/images", data);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data?.message || "Upload failed");
    }
})
export default candidateManageSlice.reducer;