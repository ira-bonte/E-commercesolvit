import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure of the cart context
interface CartContextType {
  cart: { [key: number]: number }; // cart is an object with productId as key and quantity as value
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{ [key: number]: number }>(
    () => JSON.parse(localStorage.getItem('cart') || '{}') // Load cart from localStorage
  );

  // Product data (example data; in real-world, you can fetch this dynamically)
  const products = [
    { id: 1, name: 'Shiny', price: 453 },
    { id: 2, name: 'Water', price: 124 },
    { id: 3, name: 'With Name', price: 322 },
    { id: 4, name: 'Butterfly', price: 234 },
  ];

  const addToCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = (updatedCart[productId] || 0) + 1; // Increment quantity
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId]; // Remove the item from cart
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
      return updatedCart;
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart, [productId]: quantity };
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
        return updatedCart;
      });
    }
  };

  // Calculate total price based on the products and quantities in cart
  const totalPrice = Object.keys(cart).reduce((total, productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    if (product) {
      return total + product.price * cart[parseInt(productId)];
    }
    return total;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
