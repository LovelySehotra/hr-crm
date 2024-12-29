import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URI;

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true
// axiosInstance.interceptors.request.use(
//     (config) => {
//       const state = store.getState(); // Access the Redux store state
//       const token = state.auth.token; // Get the token from the auth slice
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`; // Set the Bearer token
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );