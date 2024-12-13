import { useCart } from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function OrderForm() {
    const { cart, getTotal } = useCart()

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target[0].value
        const name = e.target[1].value
        const phone = e.target[2].value

        const order = {
            buyer: { name, email, phone },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }

        createOrder(order)
    }

    return (
        <Form className='w-50' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPhone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='text' placeholder='Phone' required />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default OrderForm
