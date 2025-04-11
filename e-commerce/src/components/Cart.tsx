// src/components/Cart.tsx
import React from 'react';
import { useCart } from './CartContext';
import Shiny from '../images/lat1.jpeg';
import Water from '../images/lat2.jpeg';
import Name from '../images/lat3.jpeg';
import Butterfly from '../images/lat4.jpeg'

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const products = [
    { id: 1, name: 'Shiny', price: 453, image: Shiny},
    { id: 2, name: 'Water', price: 124, image: Water },
    { id: 3, name: 'Name', price: 322, image: Name },
    { id: 4, name: 'Butterfly', price: 234, image: Butterfly },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {Object.keys(cart).map((productId) => {
            const product = products.find((p) => p.id === parseInt(productId));
            if (!product) return null;
            return (
              <div key={product.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-700">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Delete
                  </button>

                  <div className="flex items-center mx-4">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(product.id, cart[product.id] - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{cart[product.id]}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(product.id, cart[product.id] + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
