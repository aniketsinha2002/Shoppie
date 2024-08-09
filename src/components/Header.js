import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

const Header = () => {
  const items = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Closing the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Event listener to detect clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Removing Event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center px-4 bg-gray-50 border-gray-300 sticky z-10 top-0">
      <Link className="px-4 no-underline text-black" to="/">
        <h1 className="text-xl font-normal tracking-widest">Shoppie</h1>
      </Link>

      <div className="flex flex-row">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black text-2xl">
            {isOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:relative top-10 md:top-0 left-0 w-full md:w-auto bg-gray-50 md:bg-transparent shadow-md md:shadow-none border-t md:border-none border-gray-300 md:border-0 z-10`}
        >
          <Link
            to="/"
            className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
            onClick={handleMenuItemClick}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
            onClick={handleMenuItemClick}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
            onClick={handleMenuItemClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block px-4 py-2 text-xl text-black font-light no-underline"
            onClick={handleMenuItemClick}
          >
            Contact
          </Link>
        </div>

        <Link
          to="/cart"
          className="relative block md:inline-block px-4 py-2 text-base text-black font-semibold no-underline"
          onClick={handleMenuItemClick}
        >
          <button className="text-black px-2 size-7">
            <BsCartCheck />
          </button>
          <span className="absolute right-2 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform bg-black rounded-full">
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
