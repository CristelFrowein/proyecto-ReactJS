import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const { getQuantity } = useContext(cartContext)

  return (
    <div className="cart-widget" 
    as= {Link}
    to= '/cart'>
     <i className="bi bi-cart" style={{ fontSize: '24px' }}></i>
     {getQuantity}
    </div>
  );
};

export default CartWidget;
