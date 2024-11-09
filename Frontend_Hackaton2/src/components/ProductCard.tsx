import React from 'react';
import { Link } from 'react-router-dom';

interface ItemProps {
  id: string;
  title: string;
  image: string;
  price: number;
  stars?: number;
  isBestSeller?: boolean;
}

const ProductCard: React.FC<ItemProps> = ({ id, title, image, price, stars, isBestSeller }) => {
  return (
    <Link to={`/item/${id}`} className="block hover:shadow-lg transition-shadow duration-200">
      <div className="card bg-white shadow-md rounded-lg overflow-hidden p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        <div className="mt-2">
          <h2 className="font-bold text-lg truncate">{title}</h2>
          <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
          {stars !== undefined && (
            <p className="text-yellow-500 text-sm mt-1">
              {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
            </p>
          )}
          {isBestSeller && <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full mt-2 inline-block">Best Seller</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;



