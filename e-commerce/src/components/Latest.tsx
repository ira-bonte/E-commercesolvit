// src/components/LatestArrivals.tsx
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from './CartContext';
import Shiny from '../images/lat1.jpeg';
import Water from '../images/lat2.jpeg';
import Name from '../images/lat3.jpeg';
import Butterfly from '../images/lat4.jpeg'

// Sample product data (can be fetched later)
const latestArrivalsData = [
  { id: 1, name: 'Shiny with phone grip', price: 453, image:Shiny, category: 'iPhone', rating: 4.9 },
  { id: 2, name: 'Water proof', price: 124, image:Water , category: 'Google Pixel', rating: 4.5 },
  { id: 3, name: 'With Name', price: 322, image:Name , category: 'Samsung', rating: 2.5 },
  { id: 4, name: 'Shiny Butterfly', price: 234, image:Butterfly, category: 'iPhone', rating: 4.5 },
];

// 💡 Inner component defined in same file 
const ProductCard: React.FC<{
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
  };
  onAddToCart: (productId: number) => void;
}> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-100 h-100" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <p className="text-gray-600 mt-2" >${product.price}</p>
        <div className="flex items-center mt-2">
        </div>
        <button
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm mr-2 cursor-pointer"
          onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
        <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded text-sm cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

const LatestArrivals: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">LATEST ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {latestArrivalsData.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default LatestArrivals;
