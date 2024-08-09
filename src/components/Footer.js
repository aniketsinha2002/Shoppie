import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500  text-center tracking-widest mb-4">
      <p className="text-lg">© {new Date().getFullYear()} Aniket Sinha</p>
      <a
        href="https://github.com/aniketsinha2002"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 tracking-widest"
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
