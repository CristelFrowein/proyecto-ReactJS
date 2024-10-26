import React from 'react';
import ItemListContainer from './assets/components/ItemListContainer' ;
import NavBar from './assets/components/NavBar' 
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer texto="Bienvenidos! proximamente agregaremos nuestros productos" />
        </div>
    );
}

export default App;

