import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { toast } from 'react-toastify';  

function ItemCount({ detail }) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(cartContext);

    const handleAdd = () => setCount(count + 1);
    const handleSub = () => setCount(count > 0 ? count - 1 : 0);

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({ ...detail, qty: count });

           
            toast.success(`${count} ${detail.title} Ha sido agregado al carrito!`); 
        }
    };

    return (
        <div className="botones">
            <div>
                <Button
                    variant="outline-danger"
                    onClick={handleSub}
                    disabled={count <= 0} 
                    aria-label="Decrease quantity"
                >
                    -
                </Button>

                <span className="d-flex justify-content-center align-items-center" aria-live="polite">
                    {count}
                </span>

                <Button
                    variant="outline-success"
                    onClick={handleAdd}
                    aria-label="Increase quantity"
                >
                    +
                </Button>
            </div>

            <Button
                variant="primary"
                onClick={handleAddToCart}
                disabled={count <= 0} 
                className="w-100"
                aria-label="Add to cart"
            >
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;


