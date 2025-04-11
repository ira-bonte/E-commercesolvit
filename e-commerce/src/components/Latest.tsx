// src/components/LatestArrivals.tsx
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from './CartContext';
import Shiny from '../images/lat1.jpeg';
import Water from '../images/lat2.jpeg';
import Name from '../images/lat3.jpeg';
import Butterfly from '../images/lat4.jpeg';

// Sample product data (can be fetched later)
const latestArrivalsData = [
  { id: 1, name: 'Shiny', price: 453, image: Shiny, category: 'Iphone 13', rating: 4.9 },
  { id: 2, name: 'Water', price: 124, image: Water, category: 'Techno Pop 5', rating: 4.5 },
  { id: 3, name: 'With Name', price: 322, image: Name, category: 'Nokia 6', rating: 2.5 },
  { id: 4, name: 'Butterfly', price: 234, image: Butterfly, category: 'Samsung S8', rating: 4.5 },
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
        <img src={product.image} alt={product.name} className="w-70 h-80 m-auto" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <AiFillStar
              key={i}
              className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>  
        <p className="text-xl font-bold mt-2">${product.price}</p>      
        <button
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm mr-2 cursor-pointer"
          onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const LatestArrivals: React.FC = () => {
  const { addToCart } = useCart();
  
  // State for search term and filtered products
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(latestArrivalsData);

  // Filter function for search term
  const filterProducts = (term: string) => {
    const filtered = latestArrivalsData.filter((product) => {
      return (
        product.name.toLowerCase().includes(term.toLowerCase()) || // Search by name
        product.category.toLowerCase().includes(term.toLowerCase()) || // Search by category
        product.price.toString().includes(term) // Search by price (string conversion for flexibility)
      );
    });
    setFilteredProducts(filtered);
  };

  // Handle search change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value);  // Apply the filter
  };

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">LATEST ARRIVALS</h2>

      {/* Search Input */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          placeholder="Search by name, category, or price"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default LatestArrivals;