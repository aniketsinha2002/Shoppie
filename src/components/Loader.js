import React, { useEffect } from "react";

const ShimmerLoader = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-x-hidden">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex flex-col space-y-4 bg-gray-200 p-4 rounded-lg shadow"
          >
            <div className="bg-gray-300 h-48 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md"></div>
            <div className="h-8 bg-gray-300 rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerLoader;
