import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';  
import ProductDetails from './pages/ProductDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterPage />} /> {/* Ruta principal */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detalles" element={<ProductDetails/>} />{/* Componente temporal para el Dashboard */}
      </Routes>
    </div>
  );
};

export default App;
