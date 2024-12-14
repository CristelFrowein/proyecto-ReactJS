import React from 'react';
import ItemListContainer from './components/ItemListContainer'; 
import NavBar from './components/NavBar'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router> 
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
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
  );
}

export default App;

