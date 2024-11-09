import axios from 'axios';

const API_URL = 'https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1';

// Función para registrar un usuario
export const registerUser = async (data: any) => {
  const response = await axios.post(`${API_URL}/auth/register`, data);
  return response.data;
};

// Función para iniciar sesión de usuario
export const loginUser = async (data: any) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};
