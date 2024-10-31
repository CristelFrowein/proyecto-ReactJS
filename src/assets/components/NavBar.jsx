import React from 'react';
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg';



const NavBar = () => {
  return (
    <nav style=
     {{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px',
      background: '#ebddcf',
      width: '100%', 
      height: '100px' 
      }}
    >
      <img src={logo} alt="logo de la tienda" style={{ height: '5rem', padding: '1rem' }} className='logo' />
      
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <a href='index.html' style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>Jarras</a>
        <a href='index.html' style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>Vasos</a>
        <a href='index.html' style={{ margin: '0 15px',  color: 'black', textDecoration: 'none' }}>Tazas</a>
        <a href='index.html' style={{ margin: '0 15px',  color: 'black', textDecoration: 'none' }}>Platos</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

