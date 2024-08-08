import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500  text-center p-4 mt-10 tracking-widest">
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
