import api from "./api";

export const createPaymentMethod = async (data) => {
  try {
    const response = await api.post("/payment-methods/create-payment-method", data);
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};

export const processPayment = async (data) => {
  try {
    const response = await api.post("/payments/process-payment", data);
    return response.data;
  } catch (error) {
    console.log("API error:", error.response || error);
    throw error;
  }
};
