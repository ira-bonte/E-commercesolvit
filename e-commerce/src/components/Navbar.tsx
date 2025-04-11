import { FC, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../images/logo2.jpg";
import { useCart } from "./CartContext";
import Cart from "./Cart"; // Assuming you have a Cart component that will display cart items

const Navbar: FC = () => {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false); // Manage modal visibility

  const cartItemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  return (
    <div>
      <nav className="w-full flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-lg cursor-pointer">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-60 h-auto object-contain" />

        {/* Nav Links */}
        <ul className="flex flex-row gap-6 text-[20px] font-medium text-orange-700">
          <li className="text-orange-500 cursor-pointer hover:text-orange-700">
            <Link to="/">Home</Link>
          </li>
          <li className="text-orange-500 cursor-pointer hover:text-orange-700">
            <Link to="/store">Store</Link>
          </li>
          <li className="text-orange-500 cursor-pointer hover:text-orange-700">Popular</li>
          <li className="text-orange-500 cursor-pointer hover:text-orange-700">Latest</li>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          <div className="relative" onClick={() => setShowCart(true)}> {/* Toggle the cart modal */}
            <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItemCount}
            </span>
          </div>
        </div>
      </nav>

      {/* Show Cart Modal */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;