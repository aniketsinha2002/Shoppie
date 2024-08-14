import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

const Header = () => {
  const items = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener to detect clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const baseClasses =
    "block md:inline-block px-4 py-2 text-[19px] text-black no-underline";
  const activeClasses = "font-normal";
  const inactiveClasses = "font-light hover:bg-gray-100";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center px-4 bg-gray-50 border-gray-300 sticky z-10 top-0">
      <NavLink
        className="px-4 py-2 no-underline text-black"
        to="/"
        onClick={handleMenuItemClick}
      >
        <h1 className="font-normal text-[19px] tracking-widest">Shoppie</h1>
      </NavLink>

      <div className="flex flex-row">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black text-[15px]">
            {isOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`${
            isOpen ? "block " : "hidden"
          } md:flex md:items-center absolute md:relative left-4 top-7 md:top-0 ml-2 w-60 md:w-auto bg-gray-50 z-10 overflow-hidden `}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
              onClick={handleMenuItemClick}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/cart"
          className="relative block md:inline-block px-4 py-2 text-black font-semibold no-underline"
          onClick={handleMenuItemClick}
        >
          <button className="text-black text-[19px] py-4">
            <BsCartCheck />
            <span className="absolute top-6 right-1 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform bg-black rounded-full">
              {items.length}
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
