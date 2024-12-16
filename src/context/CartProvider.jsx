import { useState } from 'react';
import { cartContext } from './cartContext';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + product.qty } : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]); 
  };

  const getQuantity = () => {
    let qtyOnly = cart.map((prod) => prod.qty);
    let total = qtyOnly.reduce((acc, current) => acc + current, 0);
    return total;
  };

  const getTotal = () => {
    let pricesOnly = cart.map((prod) => prod.qty * prod.price);
    let total = pricesOnly.reduce((acc, current) => acc + current, 0);
    return total;
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getQuantity, getTotal }}
    >
      {children}
    </cartContext.Provider>
  );
}
