import React, { useState } from 'react';
import { UserIcon, LockClosedIcon, LoginIcon } from '@heroicons/react/outline'; // Cambia a LoginIcon o LogoutIcon
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
  token: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData) as LoginResponse;
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Error de inicio de sesión');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-300 to-green-500 p-4">
      <LoginIcon className="h-24 w-24 text-white mb-4" /> {/* Usa LoginIcon en lugar de ArrowRightOnRectangleIcon */}
      <h1 className="text-4xl font-extrabold text-white mb-2">Bienvenido a Supermercado Online</h1>
      <p className="text-lg text-white mb-8">¡Inicia sesión para continuar con tus compras!</p>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <UserIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <LockClosedIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 pl-10 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <LoginIcon className="h-5 w-5" /> {/* Cambia a LoginIcon o LogoutIcon */}
            <span>Iniciar Sesión</span>
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          ¿No tienes una cuenta?{' '}
          <a href="/" className="text-blue-500 hover:text-blue-700 font-bold">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
