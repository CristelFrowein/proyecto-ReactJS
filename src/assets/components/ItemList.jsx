import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <div className="productos">
      {productos.length === 0 ? (
        <div>No se encontraron productos.</div>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.title} className="producto-imagen" />
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <span>${producto.price}</span>
            <Link to={`/product/${producto.id}`}>Ver detalle</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
