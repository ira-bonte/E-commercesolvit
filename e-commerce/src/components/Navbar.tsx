import { FC } from "react";
import { ShoppingCart, Search } from "lucide-react";
import logo from "../images/logo2.jpg";
import { useCart } from "./CartContext"; // 👈 import

const Navbar: FC = () => {
  const { cart } = useCart(); // 👈 access cart

  return (
    <nav className="w-full flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-lg cursor-pointer">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-60 h-auto object-contain" />

      {/* Nav Links */}
      <ul className="flex flex-row gap-6 text-[20px] font-medium text-orange-700">
        <li className="text-orange-500 cursor-pointer hover:text-orange-700 ">Home</li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-700">Category</li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-700">Popular</li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-700">Orders</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 mt-4 lg:mt-0">
        <Search className="w-5 h-5 cursor-pointer text-gray-700 hover:text-red-500" />
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
