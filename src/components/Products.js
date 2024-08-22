import React, { useState } from "react";
import Cards from "./Cards.js";
import Slider from "./Slider.js";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  return (
    <div>
      <div className="mt-4 flex flex-col  justify-center    items-center">
        <h6>Select Your Price Range</h6>
        <div className="mt-3 mb-4">
          <Slider onChangePrice={handlePriceChange} />
        </div>
      </div>
      {/* Filtered Products */}
      <Cards priceRange={priceRange} />
    </div>
  );
};

export default Products;
