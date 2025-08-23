import React, { createContext, useContext, useState, useEffect } from "react";

// Context for the cart
const CartContext = createContext();

// provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load from localStorage when context first initializes
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adding item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
   // Removing item from the cart
   const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculating the total price
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};

//my custom hook for using the CartContext
export const useCart = () => useContext(CartContext);
