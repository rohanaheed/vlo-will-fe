import api from "./api";

export const loginApi = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    console.log("response:", response);
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};

export const signupApi = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    console.log("response:", response);
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};

