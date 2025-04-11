// src/components/Popular.tsx

import { FC, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import pop1 from '../images/pop1.jpeg';
import pop2 from '../images/pop2.jpeg';
import pop3 from '../images/pop3.jpeg';

// Mock data
const products = [
  {
    id: 1,
    name: 'Transparent Shockproof Case',
    image: pop1,
    price: 15,
    category: 'Iphone 11',
    rating: 4,
  },
  {
    id: 2,
    name: 'Monica Case',
    image: pop2,
    price: 12,
    category: 'Iphone 12',
    rating: 5,
  },
  {
    id: 3,
    name: 'Matte Black Case',
    image: pop3,
    price: 18,
    category: 'Samsung S6 Edge',
    rating: 4,
  },
];

// ProductCard Component
const ProductCard: FC<{ product: typeof products[0] }> = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform duration-300">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-contain mb-4"
    />
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <AiFillStar
          key={i}
          className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
    <p className="text-xl font-bold mt-2">${product.price}</p>
    <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm mr-2 cursor-pointer">
      Add to Cart
    </button>
  </div>
);

// ProductGrid Component
const ProductGrid: FC<{ products: typeof products }> = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

// Popular Section
const Popular = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter function
  const filterProducts = (term: string) => {
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(term.toLowerCase()) ||  // Search by name
        product.category.toLowerCase().includes(term.toLowerCase()) ||  // Search by category
        product.price.toString().includes(term)  // Search by price (string conversion for flexibility)
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
    <section className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
        <p className="text-gray-500">Browse our best-selling phone cases</p>
      </div>

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
      <ProductGrid products={filteredProducts} />
    </section>
  );
};

export default Popular;
