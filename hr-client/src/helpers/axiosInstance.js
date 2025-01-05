import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URI;

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true
axiosInstance.defaults.headers['Content-Type'] = 'application/json';

// let isRefreshing = false;
// let subscribers = [];
axiosInstance.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");
  const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 
      const refreshToken = getRefreshTokenFromCookie();
      if (refreshToken) {
        try {
          const res = await axiosInstance.post("/refresh-token", { refreshToken });

          const newAccessToken = res.data.accessToken;
          console.log(newAccessToken)
          const updatedUserInfo = { ...JSON.parse(localStorage.getItem('userInfo')), accessToken: newAccessToken };

          // Update the access token in localStorage
          localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

          // Retry the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed", refreshError);
          // Handle error: e.g., log out the user or redirect to login
          localStorage.removeItem("userInfo");
          window.location.href = "/login"; // Redirect to login page
          return Promise.reject(refreshError);
        }
      } else {
        window.location.href = "/login"; // Redirect to login page if no refresh token
      }
    }
    return Promise.reject(error);
  }
);
// Helper function to get refresh token from cookies (assuming it's stored in HttpOnly cookie)
const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'refreshToken') return value;
  }
  return null;
};