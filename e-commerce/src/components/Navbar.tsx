import {FC} from "react";
import {ShoppingCart, Search}  from "lucide-react";
import logo from "../images/logo.jpg";

const Navbar: FC = () =>{
      return(
            <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">{logo}</nav>
            <div className=""></div>
      )
}