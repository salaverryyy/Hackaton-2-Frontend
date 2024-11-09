import axios from 'axios';
import apiClient from '../apiConfig';
import { Product, UserCartResponse } from '../@types/types';
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

// Función para obtener detalles de un producto
export const getProductDetails = async (id: string) => {
  try {
    const response = await apiClient.get(`/item/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del producto:', error);
    throw error;
  }
};

// Función para agregar un ítem al carrito
export const addToCart = async (itemId: string, userId: string) => {
  try {
    const response = await apiClient.put('/cart', { itemId, userId });
    return response.data;
  } catch (error) {
    console.error('Error al agregar al carrito:', error);
    throw error;
  }
};
  
 // Función para obtener el carrito de un usuario
 export const getUserCart = async (userId: string): Promise<Product[]> => {
  try {
    const response = await apiClient.get<UserCartResponse>(`/cart/${userId}`);
    return response.data.products;
  } catch (error) {
    console.error('Error al obtener el carrito del usuario:', error);
    throw error;
  }
};