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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-item" element={<AddItem onAddItem={handleAddItem} />} />
        <Route path="/product/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;



