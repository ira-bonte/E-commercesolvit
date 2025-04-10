// src/contexts/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cart: number[];
  addToCart: (productId: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    console.log(`Adding product ${productId} to cart`);
    setCart((prev) => [...prev, productId]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
 