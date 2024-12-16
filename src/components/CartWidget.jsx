import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(cartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <button>
      <i className="bi bi-cart" style={{ fontSize: '24px' }}></i>
      {getQuantity()} 
      </button>
      
    </Link>
  );
};

export default CartWidget;
