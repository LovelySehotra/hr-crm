import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URI;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("axios")
// Request Interceptor: Attach Access Token
axiosInstance.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");
  const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response Interceptor: Handle Token Expiry
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 

      // Prevent infinite loop
      if (originalRequest.url === "/refresh-token") {
        return Promise.reject(error);
      }

      const refreshToken = getRefreshTokenFromCookie();

      if (refreshToken) {
        try {
          const res = await axios.post(`${BASE_URL}/refresh-token`, { refreshToken });

          const newAccessToken = res.data.accessToken;
          const updatedUserInfo = { 
            ...JSON.parse(localStorage.getItem('userInfo')), 
            accessToken: newAccessToken 
          };

          localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed", refreshError);
          localStorage.removeItem("userInfo");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// Helper Function: Get Refresh Token
const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'refreshToken') return value;
  }
  return null;
};
