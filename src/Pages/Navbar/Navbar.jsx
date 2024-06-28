import React, { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

const NavMenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative py-2 px-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm hover:text-blue-600 transition-colors duration-300">
        {item}
      </span>
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
};

const Navbar = () => {
  const menuItems = [
    "RINGS",
    "NECKLACES",
    "EARRINGS",
    "ENGAGEMENT RINGS",
    "WEDDING RINGS",
    "BRACELETS",
    "COLLECTIONS",
  ];
  return (
    <nav className="bg-white py-4 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm">24/7 Customer Support</span>
          <span className="text-sm">+91-99999-88888</span>
        </div>

        <div className="text-3xl px-2 font-serif tracking-widest text-gray-800 relative">
          <span className=" relative z-10">E-Commerce</span>
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 transform -skew-x-12"></span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-8 pr-2 py-1 border rounded text-sm focus:outline-none focus:border-transparent"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <FaUser className="text-gray-600 cursor-pointer" />
          <FaHeart className="text-gray-600 cursor-pointer" />
          <FaShoppingBag className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Navigation menu */}

      <div className="mt-2">
        <div className="container mx-auto flex justify-between py-3 px-4">
          {menuItems.map((item) => (
            <NavMenuItem key={item} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
