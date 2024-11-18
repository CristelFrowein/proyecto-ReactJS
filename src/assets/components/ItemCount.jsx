import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ItemCount() {
   const [count, setCount] = useState (0);
   const handleAdd = () => setCount (count + 1);
   const handleSub  = () => setCount (count - 1);

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
            <Button>add to cart</Button> 
        </div>
    )
}

export default ItemCount;

