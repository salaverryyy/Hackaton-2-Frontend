import React from 'react';
import { useParams } from 'react-router-dom';

interface Item {
  id: string;
  title: string;
  image: string;
  price: number;
  stars?: number;
  isBestSeller?: boolean;
  description: string;
}

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = {
    id,
    title: `Item ${id}`,
    image: 'https://via.placeholder.com/300',
    price: 49.99,
    stars: 4,
    isBestSeller: true,
    description: 'This is a detailed description of the item.'
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 mb-2">Price: ${item.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-2">Quality: {item.stars} stars</p>
        <p className="text-gray-600 mb-2">Best Seller: {item.isBestSeller ? 'Yes' : 'No'}</p>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;