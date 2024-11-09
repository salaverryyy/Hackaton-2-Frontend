import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-600 p-4 text-white">
          <h1 className="text-2xl font-bold">Product Store</h1>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
