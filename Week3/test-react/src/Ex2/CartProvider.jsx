import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} đã được thêm vào giỏ hàng`);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const value = {
    cart,
    addToCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider; 
