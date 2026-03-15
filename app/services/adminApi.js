import axios from "axios";

const adminApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_API_URL || "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - attach admin auth token
adminApi.interceptors.request.use(
  (config) => {
    const adminInfo = typeof window !== "undefined" ? localStorage.getItem("adminInfo") : null;
    if (adminInfo) {
      try {
        const parsed = JSON.parse(adminInfo);
        const token =
          parsed?.data?.tokens?.accessToken ??
          parsed?.tokens?.accessToken ??
          parsed?.accessToken ??
          parsed?.token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error("Failed to parse adminInfo from localStorage", e);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default adminApi;
