import api from "./api";

export const getPackages = async () => {
  try {
    const response = await api.get("/packages");
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};

export const selectPackage = async (packageId) => {
  try {
    const response = await api.put(`/packages/${packageId}/select-package`);
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};
