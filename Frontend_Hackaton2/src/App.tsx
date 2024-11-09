
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';  
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddItem from './pages/AddItem';
import ItemDetail from './pages/ItemDetail';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };


const App: React.FC = () => {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterPage />} /> {/* Ruta principal */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<h2>Dashboard</h2>} /> {/* Componente temporal para el Dashboard */}
      </Routes>
    </div>
  );
};

export default App;

