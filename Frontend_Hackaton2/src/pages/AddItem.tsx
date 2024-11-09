import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Item {
  itemId?: string;
  title: string;
  imgUrl: string;
  price: number;
  stars: number;
  isBestSeller: boolean;
  boughtInLastMonth: number;
}

const AddItem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [stars, setStars] = useState(0);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [boughtInLastMonth, setBoughtInLastMonth] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = {
      title,
      imgUrl,
      price,
      stars,
      isBestSeller,
      boughtInLastMonth,
    };

    try {
      const response = await axios.post('https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1/item', newItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Asegúrate de que el token esté disponible y correcto
        }
      });
      console.log('Item created:', response.data);
      alert('Item created successfully!');
      navigate('/'); // Redirigir a la lista de productos después de agregar
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Error creating item, please check the input and try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Image URL</label>
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Stars (0-5)</label>
          <input
            type="number"
            value={stars}
            onChange={(e) => setStars(Number(e.target.value))}
            className="w-full p-2 border rounded"
            min={0}
            max={5}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Best Seller</label>
          <input
            type="checkbox"
            checked={isBestSeller}
            onChange={(e) => setIsBestSeller(e.target.checked)}
            className="p-2"
          />
        </div>
        <div>
          <label className="block mb-2">Bought in Last Month</label>
          <input
            type="number"
            value={boughtInLastMonth}
            onChange={(e) => setBoughtInLastMonth(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;


