import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URI;

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true