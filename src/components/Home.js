import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  //hosting static images for better load time
  const baseUrl = "https://shoppie-img.static.domains/";
  const imageNames = [
    "img1.jpg",
    "img2.jpg",
    "img3.png",
    "img4.jpg",
    "img5.jpg",
  ];

  // full image URLs
  const images = imageNames.map((name) => `${baseUrl}${name}`);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="px-2 text-4xl md:text-7xl font-thin text-black mb-4 uppercase -tracking-tighter">
          Experience the Height of Fashion
        </h1>
        <h2 className="text-lg md:text-2xl font-extralight text-gray-600 mb-8 tracking-wider px-2">
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
