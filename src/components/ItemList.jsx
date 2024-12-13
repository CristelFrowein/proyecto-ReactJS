import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Item from './Item'

function ItemList ({ items }) {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className='g-4 py-3'>
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  )
}

export default ItemList
