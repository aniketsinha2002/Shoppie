import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { BsCartCheck } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { Input } from "antd";
const { Search } = Input;

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
    "block md:inline-block px-4 py-2 text-[16px] text-black no-underline";
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
      {/* OPEN CLOSE HAMBARGOR MENU ICON */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black text-[20px]">
          {<VscThreeBars />}
        </button>
      </div>

      <NavLink
        className="px-2 md:px-4 py-2 no-underline text-black"
        to="/"
        onClick={handleMenuItemClick}
      >
        <h3 className="font-bold uppercase text-[16px] md:text-[20px] tracking-widest">
          Shoppie
        </h3>
      </NavLink>

      <div className="flex items-center">
        <div
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center fixed md:relative top-0 left-0 md:top-0 md:left-0 h-full md:h-auto w-64 md:w-auto bg-gray-50 z-20 md:z-auto p-4 md:p-0 shadow-md md:shadow-none overflow-y-auto md:overflow-y-visible`}
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

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative hidden md:block">
            <Search
              className="text-black text-[15px] w-full md:w-auto"
              placeholder="Search"
            />
          </div>

          <NavLink
            to="/favourites"
            className="relative px-2 md:px-4 py-2 text-black font-semibold no-underline"
          >
            <IoMdHeartEmpty className="text-[20px]" />
          </NavLink>

          <NavLink
            to="/cart"
            className="relative px-2 md:px-4 py-2 text-black font-semibold no-underline"
            onClick={handleMenuItemClick}
          >
            <BsCartCheck className="text-[20px]" />
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-white transform bg-black rounded-full">
              {items.length}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
