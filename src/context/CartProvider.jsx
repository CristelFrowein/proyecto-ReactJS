import { useState } from 'react'
import { cartContext } from './cartContext'

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart([...cart, product])
  }

  const getQuantity = () => {
    let qtyOnly = cart.map(prod => prod.qty)
    let total = qtyOnly.reduce((acc, current) => acc + current, 0)
    return total
  }

  const getTotal = () => {
    let pricesOnly = cart.map(prod => prod.qty * prod.price)
    let total = pricesOnly.reduce((acc, current) => acc + current, 0)
    return total
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
      {children}
    </cartContext.Provider>
  )
}
