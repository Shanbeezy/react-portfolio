// src/services/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000, // Timeout in milliseconds
});

export const sendEmail = async (formData) => {
  try {
    const response = await instance.post('/send', formData);
    return response.data; // Return data if successful
  } catch (error) {
    throw error; // Throw error to handle in component
  }
};

export default instance;
