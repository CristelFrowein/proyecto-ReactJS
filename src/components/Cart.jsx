import ListGroup from 'react-bootstrap/ListGroup'
import { useCart } from '../context/useCart'
import OrderForm from './OrderForm'


function Cart() {
    const { cart } = useCart()

    return (
        <div className='d-flex'>
            <ListGroup className='w-50'>
                {cart.map((prod) => (
                    <ListGroup.Item key={prod.id}>{prod.name} x {prod.qty}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <OrderForm />
        </div>
    )
}

export default Cart

