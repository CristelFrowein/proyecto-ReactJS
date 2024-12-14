import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


function Item ({ item }) {
    return (
            <div className='cardItem'>
                 <div>
                <img src={item.image} />
               
                    <h2>{item.title}</h2>
                    <span>
                       $ {item.price}
                    </span>
                    <p>
                        {item.category}
                    </p>
                    <p>
                        {item.description}
                    </p>
                    <Button as={Link} 
                    to={`/item/${item.id}`}>
                        Ver más
                    </Button>
                </div>
            </div>
       
    )
}

export default Item;
