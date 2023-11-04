import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h2>Bienvenidos!</h2>
      </Link>
      <Link to="/" className="nav-link">
        Catálogo
      </Link>
      <Link to="/contact" className="nav-link">
        Contacto
      </Link>
      <CartWidget cartItems={cartItems} addToCart={addToCart} />
    </nav>
  );
}

export default NavBar;
