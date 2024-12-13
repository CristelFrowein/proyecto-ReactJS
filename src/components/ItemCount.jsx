import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useContext } from 'react' 
import { cartContext } from '../context/cartContext'

function ItemCount({ detail }) {
   const [count, setCount] = useState (0);
   const { addToCart } = useContext(cartContext);

   const handleAdd = () => setCount (count + 1);
   const handleSub  = () => setCount (count - 1);

   const handleAddToCart = () => { 
    addToCart({ ...detail, qty: count });
 };

    return (
        <div className= "carrito">

            <p className='text-center border'>{count}</p> 
            <div className='botones'>
                <Button onClick={handleSub}>
                    -
                </Button>
                <Button onClick={handleAdd}>
                    +
                </Button>
            </div>
            <Button onClick={handleAddToCart}>add to cart</Button> 
        </div>
    )
}

export default ItemCount;

