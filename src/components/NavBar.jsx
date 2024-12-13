import React from 'react';
import { Link } from 'react-router-dom';  
import CartWidget from './CartWidget';
import logo from '../assets/img/logo.jpg';


const NavBar = () => {
  return (
    <nav>
       <Link to='/'>
       <img src={logo} alt="logo de la tienda" className="logo" />
       </Link>
      
      <div>
        <ul className="nav-links">
          <li><Link to="/category/ceramica">Cerámica</Link></li>
          <li><Link to="/category/vidrio">Vidrio</Link></li>
          <li><Link to="/category/porcelana">Porcelana</Link></li>
          <li><Link to="/category/cristal">Cristal</Link></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
