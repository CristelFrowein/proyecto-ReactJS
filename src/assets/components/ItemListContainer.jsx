import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { category } = useParams();  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      setCargando(true);
      try {
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : 'https://fakestoreapi.com/products'; 

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Hubo un problema con la respuesta de la red');
        }

        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError('Hubo un error al cargar los productos');
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, [category]);  
  if (cargando) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="item-list-container">
      <h2>{category ? `Productos de ${category}` : 'Todos los productos'}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
