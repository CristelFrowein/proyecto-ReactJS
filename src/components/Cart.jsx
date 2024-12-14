import { useCart } from '../context/useCart'
import OrderForm from './OrderForm'

function Cart() {
    const { cart } = useCart()

    return (
        <div className="cart">
            <div className="cart-items d-flex flex-wrap gap-4">
                {cart.map((prod) => (
                    <div key={prod.id} className="cart-item d-flex flex-column align-items-center">
                        <img src={prod.image} alt={prod.title} className="cart-item-img" />
                        <p className="cart-item-category">{prod.category}</p>
                        <p className="cart-item-title">{prod.title} x  {prod.qty}</p>
                    </div>
                ))}
            </div>

            <OrderForm />
        </div>
    )
}

export default Cart
