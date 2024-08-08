import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaTimes } from "react-icons/fa";

const Header = () => {
  const items = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  justify-between items-center px-4 py-3 bg-gray-50 border-gray-300 sticky z-10 top-0">
      <div className="px-4">
        <h1 className="text-xl font-normal tracking-widest">Shoppie</h1>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black text-2xl">
          {isOpen ? <FaTimes /> : <FaEllipsisV />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center absolute md:relative top-14 md:top-0 left-0 w-full md:w-auto bg-gray-50 md:bg-transparent shadow-md md:shadow-none border-t md:border-none border-gray-300 md:border-0 z-10`}
      >
        <Link
          to="/"
          className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className="relative block md:inline-block px-4 py-2 text-base text-black font-semibold no-underline"
        >
          <button className="text-black text-2xl">🛒</button>
          <span className="absolute right-2 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform bg-black rounded-full">
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
