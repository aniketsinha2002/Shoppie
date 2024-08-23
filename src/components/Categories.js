import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the category list from the API
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="flex flex-col space-y-3 md:space-y-5 w-full lg:w-1/6 lg:pr-4 lg:pt-4 mb-5 font-normal text-base">
      {categories.slice(0, 8).map((category, index) => (
        <div key={index} className="flex items-center justify-between">
          <div>{category.name}</div>
          <IoIosArrowForward />
        </div>
      ))}
    </div>
  );
};

export default Categories;
