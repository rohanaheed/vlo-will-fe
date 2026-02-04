import api from "./api";

export const loginApi = async (data) => {
  try {
    const response = await api.post("/login", data);
    console.log("response:", response);
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};
