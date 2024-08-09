import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import img1 from "../assets/images/img1.avif";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.avif";

const Home = () => {
  const images = [img1, img2, img3, img4, img5];

  // const handleButtonClick = () => {
  //   navigate("/products");
  // };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl md:text-7xl font-thin text-black mb-4 uppercase -tracking-tighter">
          Experience the Height of Fashion
        </h1>
        <h2 className="text-lg md:text-2xl font-extralight text-gray-600 mb-8 tracking-wider">
          Discover our exclusive designer pieces that embody sophistication and
          style.
        </h2>
        <NavLink to="/products">
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            Discover More Products
          </button>
        </NavLink>
      </div>

      {/* Image Sections */}
      <div className="flex flex-wrap justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 p-4 ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <img
              src={img}
              alt="fashion model"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-lg md:text-xl text-gray-800">
              {index % 2 === 0
                ? "Our designs reflect your personality."
                : "Fashion that speaks your language."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
