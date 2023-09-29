import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState();

  const handleCartToggle = () => {
    setCartOpen((cartOpen) => !cartOpen);
  };

  return (
    <CartContext.Provider value={{ cartOpen, handleCartToggle }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext has been used outside of CartProvider");
  return context;
}

export { useCart, CartProvider };
