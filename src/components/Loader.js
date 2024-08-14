import React from "react";

function Loader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array(8)
        .fill()
        .map((_, index) => (
          <div key={index} className="bg-gray-50">
            <div className="m-2 p-4 shadow-md border-none rounded-lg bg-white animate-pulse">
              <div className="w-80 h-40 bg-gray-200 rounded-lg mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-10 bg-gray-300 rounded-lg mt-4"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Loader;
