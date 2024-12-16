import { useCart } from '../context/useCart';  
import OrderForm from './OrderForm';
import { Link } from 'react-router-dom';



function Cart() {
    const { cart, getTotal, removeFromCart, clearCart } = useCart();  

    
    const totalCart = getTotal(); 

    return (
        <div className="cartContainer">
            {cart.length === 0 ? (
                <p className="empty-cart-message">
                Tu carrito está vacío. Vuelve al <Link to="/">inicio</Link>
            </p>
            ) : (
                <div>
                    <div className="cart">
                        {cart.map((prod) => (
                            <div key={prod.id} className='cartCard'>
                                <img src={prod.image} alt={prod.title}/>
                                <p>{prod.category}</p>
                                <p>{prod.title} x {prod.qty}</p>
                                <p>${(prod.price * prod.qty).toFixed(2)}</p> 

                               
                                <button 
                                    className="btn btn-danger" 
                                    onClick={() => removeFromCart(prod.id)}
                                >
                                   Eliminar producto
                                </button>
                            </div>
                        ))}
                    </div>
                  
                  
                  <div className='totalCarrito'>
                  <div>
                        <p className="total">Total: ${totalCart.toFixed(2)}</p> 
                    </div>

                    <button onClick={clearCart}>
                     Vaciar carrito
                    </button>
                    <Link to="/">
                    <button>Ir al inicio</button>
                    </Link>
                    </div>
                 
                </div>
            )}

            <OrderForm />
        </div>
    );
}

export default Cart;

