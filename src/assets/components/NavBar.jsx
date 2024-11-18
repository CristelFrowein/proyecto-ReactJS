import React from 'react';
import { Link } from 'react-router-dom';  
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg';


const NavBar = () => {
  return (
    <nav>
       <Link to='/'>
       <img src={logo} alt="logo de la tienda" className="logo" />
       </Link>
      
      <div>
        <ul className="nav-links">
          <li><Link to="/category/electronics">Electrónica</Link></li>
          <li><Link to="/category/jewelery">Joyería</Link></li>
          <li><Link to="/category/men's clothing">Ropa para hombres</Link></li>
          <li><Link to="/category/women's clothing">Ropa para mujeres</Link></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
