import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ProductDetail = () => {
  const { id } = useParams();  
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      setCargando(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Hubo un problema con la respuesta de la red');
        }
        const data = await response.json();
        setProducto(data);
        setCargando(false);
      } catch (error) {
        setError('Hubo un error al cargar el producto');
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);  

  if (cargando) return <div>Cargando producto...</div>;
  if (error) return <div>{error}</div>;

  return (
    
      <div className='contenedor'>
      <div className='product-detail'>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <span>${producto.price}</span>
      </div>

      <ItemCount producto={producto} />
    </div>
    
  );
};

export default ProductDetail;
