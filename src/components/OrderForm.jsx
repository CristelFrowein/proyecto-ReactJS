import { useCart } from '../context/useCart';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderForm() {
    const { cart, getTotal } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const name = e.target[1].value;
        const phone = e.target[2].value;

        const order = {
            buyer: { name, email, phone },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        };

        createOrder(order);
    };

   
    const isCartEmpty = cart.length === 0;

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
                    <div className="orderForm">
                        <h2>Completá tu pedido</h2>
                        
                       
                        {isCartEmpty ? (
                            <p className="text-center text-danger">No hay productos en el carrito para completar el pedido.</p>
                        ) : null}

                        <Form className='formGroup' onSubmit={handleSubmit}>
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label>Email address: </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Phone number"
                                    required
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            
                            <Button
                                type="submit"
                                className="btn-lg w-50 mx-auto d-block"
                                disabled={isCartEmpty} 
                            >
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderForm;

