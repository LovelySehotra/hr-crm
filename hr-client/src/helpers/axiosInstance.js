import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URI;

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true
export const setupInterceptors = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const state = store.getState(); 
      const token = state.auth?.userInfo?.accessToken; 
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Attach Bearer token
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};