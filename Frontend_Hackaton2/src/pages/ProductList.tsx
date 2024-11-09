import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

interface Item {
  itemId: string;
  title: string;
  imgUrl: string;
  price: number;
  stars: number;
  isBestSeller: boolean;
  boughtInLastMonth: number;
}

const ProductList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const userRole = 'admin'; // Simulación de rol de usuario, debería venir de la autenticación

  // Función para obtener los items de la API
  const fetchItems = async () => {
    try {
      const response = await axios.get('https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1/items?limit=10');
      setItems(response.data.items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Mostrar el botón de agregar solo si el usuario es admin */}
      {userRole === 'admin' && (
        <button
          onClick={() => (window.location.href = '/add-item')} // Redirige al formulario de agregar item
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Add Item
        </button>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard
            key={item.itemId}
            id={item.itemId}
            title={item.title}
            image={item.imgUrl}
            price={item.price}
            stars={item.stars}
            isBestSeller={item.isBestSeller}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


