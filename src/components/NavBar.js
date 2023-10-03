import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';






function NavBar() {
    return (
    <nav className="navbar">
        <Link to="/" className="nav-link">
        Catálogo
        </Link>
        <Link to="/product/1" className="nav-link">
        Más vendido!
        </Link>
        <CartWidget />
    </nav>
    );
}

export default NavBar;
