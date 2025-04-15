import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import Logo from "../../assets/Logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md relative z-10 flex justify-between items-center px-10 py-5">
      <img src={Logo} alt="Logo" />
      <div className="flex  items-center space-x-4">
        <div className="relative">
          <button className="bg-gray-100 text-whitetheme px-3 py-1 rounded-md flex items-center text-sm">
            SYDMAL
            <FaChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
        <button className="text-gray-500">
          <FiBell className="h-5 w-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;
