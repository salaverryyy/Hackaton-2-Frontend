import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductDetails, addToCart } from '../services/api';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductDetails(id!);
        setProduct(data);
      } catch (err) {
        console.error('Error cargando los detalles del producto:', err);
        setError('Error al cargar los detalles del producto.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const userId = 'usuarioEjemplo'; // Reemplazar con el ID real del usuario autenticado.
    addToCart(product.itemId, userId)
      .then(() => alert('Producto agregado al carrito'))
      .catch((error) => console.error('Error al agregar al carrito:', error));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      {product ? (
        <>
          <h1>{product.title}</h1>
          <p>Precio: ${product.price}</p>
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </>
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </div>
  );
};

export default ProductDetails;


