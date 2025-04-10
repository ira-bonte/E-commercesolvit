import { FC, useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import logo from "../images/logo2.jpg";
import { useCart } from "./CartContext"; 
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const { cart } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`${location.pathname}?category=${query.trim()}`);
    }
  };

  return (
    <nav className="w-full flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-lg cursor-pointer">
      <img src={logo} alt="Logo" className="w-60 h-auto object-contain" />

      {/* Links */}
      <ul className="flex flex-row gap-6 text-[20px] font-medium text-orange-700">
        <li className="text-orange-500 cursor-pointer hover:text-orange-700 ">Home</li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-700">Category</li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-700">Popular</li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-700">Orders</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 mt-4 lg:mt-0">
        <div className="relative">
          <Search
            className="w-5 h-5 cursor-pointer text-gray-700 hover:text-red-500"
            onClick={() => setShowSearch((prev) => !prev)}
          />
          {showSearch && (
            <form
              onSubmit={handleSearch}
              className="absolute top-8 right-0 bg-white p-2 shadow-md rounded-lg flex gap-2 z-50"
            >
              <input
                type="text"
                placeholder="Search category..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border px-2 py-1 rounded-md text-sm outline-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-700"
              >
                Go
              </button>
            </form>
          )}
        </div>

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