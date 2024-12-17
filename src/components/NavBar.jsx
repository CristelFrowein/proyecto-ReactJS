import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/img/logo.jpg";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="logo de la tienda" className="logo" />
      </NavLink>

      <div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/category/ceramica"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Cerámica
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/vidrio"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Vidrio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/porcelana"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Porcelana
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/cristal"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Cristal
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
