
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/AuthSlice";
import candidateManageReducer from "./slices/CandidateManageSlice"
import { setupInterceptors } from "../helpers/axiosInstance";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        candidateManage:candidateManageReducer,
    },
    devTools: true
}) 
setupInterceptors(store);

export default store;
