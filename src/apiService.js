// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://0.0.0.0:8000'; // Use your FastAPI server URL

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/your-endpoint`);
        return response.data;
    } catch (error) {
        console.error("There was an error making the request", error);
        throw error;
    }
};

export const sendData = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/your-endpoint`, data);
        return response.data;
    } catch (error) {
        console.error("There was an error making the request", error);
        throw error;
    }
};
