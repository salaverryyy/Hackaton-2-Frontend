import React, { useState } from 'react';
import { UserIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/outline';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface RegisterResponse {
  message: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'client' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData) as RegisterResponse;
      alert(response.message);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <UserCircleIcon className="h-24 w-24 text-white mb-4" />
      <h1 className="text-4xl font-extrabold text-white mb-2">Supermercado Online</h1>
      <p className="text-lg text-white mb-8">¡Bienvenido! Regístrate para comenzar a hacer tus compras</p>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Registro</h2>
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
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Rol</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="shadow border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="client">Cliente</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <UserCircleIcon className="h-5 w-5" />
            <span>Registrarse</span>
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-700 font-bold">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
