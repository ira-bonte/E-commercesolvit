import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from '../components/CartContext';

// Import your images
import a from '../images/store/iphone1.jpg';
import b from '../images/store/iphone2.jpg';
import c from '../images/store/iphone3.jpg';
import d from '../images/store/pixel1.jpg';
import e from '../images/store/pixel2.jpg';
import f from '../images/store/pixel3.jpg';
import g from '../images/store/samsung1.jpg';
import h from '../images/store/samsung2.jpg';
import i from '../images/store/samsung3.jpg';
import j from '../images/store/grip1.jpg';
import k from '../images/store/gripst2.jpg';
import l from '../images/store/iphone4.jpg';
import m from '../images/store/gripst3.jpg';
import n from '../images/store/pixel4.jpg';
import o from '../images/store/grip4.jpg';
import p from '../images/store/samsung4.jpg';



// You can later add other categories like Popular, Accessories, etc.
const allProducts = [
  { id: 1, name: 'Shiny', price: 453, image: a, category: 'Iphone 13', rating: 4.9 },
  { id: 2, name: 'Water', price: 124, image: b, category: 'Techno Pop 5', rating: 4.5 },
  { id: 3, name: 'With Name', price: 322, image: c, category: 'Nokia 6', rating: 2.5 },
  { id: 4, name: 'Butterfly', price: 234, image: d, category: 'Samsung S8', rating: 4.5 },
  { id: 5, name: 'Butterfly', price: 234, image: e, category: 'Samsung S8', rating: 4.5 },
  { id: 6, name: 'Butterfly', price: 234, image: f, category: 'Samsung S8', rating: 4.5 },
  { id: 7, name: 'Butterfly', price: 234, image: g, category: 'Samsung S8', rating: 4.5 },
  { id: 8, name: 'Butterfly', price: 234, image: h, category: 'Samsung S8', rating: 4.5 },
  { id: 9, name: 'Butterfly', price: 234, image: i, category: 'Samsung S8', rating: 4.5 },
  { id: 10, name: 'Butterfly', price: 234, image: j, category: 'Samsung S8', rating: 4.5 },
  { id: 11, name: 'Butterfly', price: 234, image: k, category: 'Samsung S8', rating: 4.5 },
  { id: 12, name: 'Butterfly', price: 234, image: l, category: 'Samsung S8', rating: 4.5 },
  { id: 13, name: 'Butterfly', price: 234, image: m, category: 'Samsung S8', rating: 4.5 },
  { id: 14, name: 'Butterfly', price: 234, image: n, category: 'Samsung S8', rating: 4.5 },
  { id: 15, name: 'Butterfly', price: 234, image: o, category: 'Samsung S8', rating: 4.5 },
  { id: 16, name: 'Butterfly', price: 234, image: p, category: 'Samsung S8', rating: 4.5 },
];

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
              className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <button
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm mr-2 cursor-pointer"
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Store: React.FC = () => {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterProducts = (term: string) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase()) ||
      product.price.toString().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterProducts(value);
  };

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">All Products</h2>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Store;
