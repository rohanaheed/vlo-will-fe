import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1", // 🔴 replace
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - attach auth token
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      try {
        const parsed = JSON.parse(userInfo);
        const token = parsed?.tokens?.accessToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error("Failed to parse userInfo from localStorage", e);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;