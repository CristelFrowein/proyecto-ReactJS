import React from 'react';

const ItemListContainer = ({ texto }) => {
    return (
        <div style={{ fontWeight: 'bold', padding: '5rem', textAlign: 'center' }}>
            <p style={{ color: 'black' }}>{texto}</p>
        </div>
    );
};

export default ItemListContainer;
