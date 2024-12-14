import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import ItemList from './ItemList'
import { getFilterProducts, getProducts } from '../firebase/db'


function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        id ? getFilterProducts(id, setItems) : getProducts(setItems)
    }, [id])

    if (items.length === 0) {
        return (
            <PacmanLoader />
        )
    }

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer
