import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



function Item ({ item }) {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                    <Card.Text>
                        {item.category}
                    </Card.Text>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button as={Link} to={`/item/${item.id}`}>
                        Ver más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;
