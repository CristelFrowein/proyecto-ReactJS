import React from 'react';
import ItemListContainer from './components/ItemListContainer'; 
import NavBar from './components/NavBar'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; 
import ItemDetail from './components/ItemDetail';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './components/Cart'; 
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <BrowserRouter>
    <Router basename="/proyecto">
      <NavBar />
      <Routes>
        
        <Route path="/" element={<ItemListContainer />} />
       
        <Route path="/category/:category" element={<ItemListContainer />} />
       
        <Route path="/product/:id" element={<ItemDetail />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false}
        newestOnTop={true}
        closeButton={true}
      />
    </Router>
    </BrowserRouter>
    
  );
}

export default App;

