import { FC } from 'react';
import { useCart } from './CartContext';
import { AiFillStar } from 'react-icons/ai';
import pop1 from '../images/pop1.jpeg'
import pop2 from '../images/pop2.jpeg'
import pop3 from '../images/pop3.jpeg'


// Mock data
const products = [
  { id: 1, name: 'Transparent Shockproof Case', image: pop1, price: 15, category: 'iPhone', rating: 4, },
  { id: 2, name: 'Monica Case', image: pop2, price: 12, category: 'Google Pixel', rating: 5, },
  { id: 3, name: 'Matte Black Case', image: pop3, price: 18, category: 'Samsung', rating: 4,},
];

// ProductCard Component
const ProductCard: FC<{ 
  product: typeof products[0];
  onAddToCart: (productId: number) => void;
}> = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform duration-300">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-contain mb-4"
    />
    <h3 className="text-lg font-semibold">{product.name}</h3>
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
    <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-sm mr-2 cursor-pointer"
    onClick={() => onAddToCart(product.id)}>
      Add to Cart
    </button>
  </div>
);

// ProductGrid Component
const ProductGrid: FC<{ 
  products: typeof products;
  onAddToCart: (productId: number) => void;
 }> = ({ products, onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

// Popular Section
const Popular = () => {
  const { addToCart } = useCart();
  return (
    <section className="bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
        <p className="text-gray-500">Browse our best-selling phone cases</p>
      </div>
      <ProductGrid products={products} onAddToCart={addToCart} />
    </section>
  );
};

export default Popular;
