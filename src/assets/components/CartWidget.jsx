import React from 'react';


const CartWidget = () => {
  const itemCount = 1; 

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
     <i className="bi bi-cart" style={{ fontSize: '24px' }}></i>
      {itemCount > 0 && (
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-10px',
          background: 'beige',
          borderRadius: '50%',
          color: 'black',
          padding: '2px 6px',
          fontSize: '12px',
        }}>
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
