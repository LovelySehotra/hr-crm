import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";
const getUserInfoFromStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
};
const initialState = {
    userInfo: getUserInfoFromStorage(),
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userInfo = action.payload;
                localStorage.setItem('userInfo', JSON.stringify(action.payload)); // Save to localStorage
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})
export const register = createAsyncThunk("auth/register", async (data) => {
    try {
        const res = await axiosInstance.post("/users/register", data);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export const login = createAsyncThunk("auth/login", async (data,{rejectWithValue}) => {
    try {
        const res = await axiosInstance.post("/users/login", data);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
       return  rejectWithValue(error.response?.data?.message || "Login failed");
    }
})
export default authSlice.reducer;