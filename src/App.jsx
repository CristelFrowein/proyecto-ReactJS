import React from 'react';
import ItemListContainer from './assets/components/ItemListContainer'; 
import NavBar from './assets/components/NavBar'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ProductDetail from './assets/components/ProductDetail';



function App() {
  return (
    <Router basename="/proyecto">
      <NavBar />
      <Routes>
        
        <Route path="/" element={<ItemListContainer />} />
       
        <Route path="/category/:category" element={<ItemListContainer />} />
       
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

