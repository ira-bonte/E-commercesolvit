import { FC } from "react";
import { ShoppingCart, Search } from "lucide-react";
import logo from "../images/logo.jpg";

const Navbar: FC = () => {
  return (
    <nav className="w-full flex flex-wrap  justify-between items-center px-6 py-4 bg-white shadow-md cursor-pointer">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-28 h-auto object-contain" />

      {/* Nav Links */}
      <ul className="flex flex-row gap-6 text-[16px] font-medium text-gray-700">
  <li className="text-gray-500 cursor-pointer hover:underline">Home</li>
  <li className="text-gray-500 cursor-pointer hover:underline">Category</li>
  <li className="text-gray-500 cursor-pointer hover:underline">Popular</li>
  <li className="text-gray-500 cursor-pointer hover:underline">Orders</li>
</ul>



      {/* Icons */}
      <div className="flex gap-4 mt-4 lg:mt-0">
        <Search className="w-5 h-5 cursor-pointer text-gray-700 hover:text-red-500" />
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
