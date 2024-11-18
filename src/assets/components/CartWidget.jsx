import React from 'react';



const CartWidget = () => {
  const itemCount = 1; 

  return (
    <div className="cart-widget" >
     <i className="bi bi-cart" style={{ fontSize: '24px' }}></i>
      {itemCount > 0 && (
        <span>
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
