import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.precio * prod.quantity;
    });
    return total;
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalQuantity = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, addItem, removeItem, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
