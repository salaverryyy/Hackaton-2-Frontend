import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<Product> = ({ id, name, image, price }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
