import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";

const initialState ={
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{}
})
export const register = createAsyncThunk("/register",async(data)=>{
    try {
        const res = await axiosInstance.post("/users/register", data);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
export default authSlice.reducer;