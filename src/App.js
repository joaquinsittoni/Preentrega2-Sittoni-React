import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.js';
import Detalle from './pages/Detalle';
import NavBar from './components/NavBar.js';
import Contact from './pages/Contact.js';
import { CartProvider } from './components/context/CartContext.js';
import Checkout from './components/Checkout/Checkout.js';
import CheckoutForm from './components/CheckoutForm/CheckoutForm.js';
import Cart from './components/Cart/Cart.js';




function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar cart={cart} /> 
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path='/product/:id' element={<Detalle />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart  />}/>
      </Routes>
    </CartProvider>

    </BrowserRouter>
  );
}

export default App;
