import adminApi from "./adminApi";

export const adminLoginApi = async (data) => {
  try {
    const response = await adminApi.post("/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Admin API error:", error.response || error);
    throw error;
  }
};

export const adminLogoutApi = async () => {
  try {
    const response = await adminApi.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Admin API error:", error.response || error);
    throw error;
  }
};
