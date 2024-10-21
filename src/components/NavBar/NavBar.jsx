import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; 

import './NavBar.css';

const NavBar = () => {
  return (
    <header className="header">
        <div className="logo-container">
            <Link to="/">
                <img src="../images/logo.png" alt="logo NutrientHub" />
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/Proteínas">Proteínas</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/Snacks">Snacks</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/Creatinas">Creatinas</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/Energía">Energía</NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget />
    </header>
  );
}

export default NavBar;
