import api from "./api";

const createWill = async (data) => {
    try {
        const res = await api.post("/wills", data);
        return res.data;
    } catch (error) {
        console.log("API error:", error.response || error);
        throw error;
    }
}

const willStep = async (data) => {
    try {
        const res = await api.put(`wills/${data.willId}/steps/${data.stepNumber}`, data.data);
        return res.data;
    } catch (error) {
        console.log("API error:", error.response?.data || error);
        throw error;
    }
}

const getStepData = async (willId, stepNumber) => {
    try {
        const res = await api.get(`wills/${willId}/steps/${stepNumber}`);
        return res.data;
    } catch (error) {
        console.log("API error:", error.response || error);
        throw error;
    }
}

const statusBar = async (data) => {
    try {
        const res = await api.get(`wills/${data.willId}/steps`);
        return res.data;
    } catch (error) {
        console.log("API error:", error.response || error);
        throw error;
    }
}

const completeWill = async (data) => {
    try {
        const res = await api.post(`wills/${data.willId}/complete`, data.data);
        return res.data;
    } catch (error) {
        console.log("API error:", error.response || error);
        throw error;
    }
}

const savePdfPath = async (willId, pdfPath) => {
    try {
        const res = await api.put(`wills/${willId}/pdf-path`, { pdf_path: pdfPath });
        return res.data;
    } catch (error) {
        console.log("API error:", error.response || error);
        throw error;
    }
}

export {
    createWill,
    willStep,
    getStepData,
    statusBar,
    completeWill,
    savePdfPath
}