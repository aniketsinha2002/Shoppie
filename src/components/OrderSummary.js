// OrderSummary.js
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ items, total, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };
  return (
    <div className=" rounded-lg px-4 md:px-6">
      <h3 className="text-4xl font-semibold mb-4">Order Summary</h3>
      <div className="mb-2 text-lg">
        Products ({items.length}): ${total.toFixed(2)}
      </div>
      <div className="mb-2 text-lg">Shipping: $30</div>
      <div className="mb-4 text-xl font-semibold">
        Total amount: ${(total + 30).toFixed(2)}
      </div>

      {link !== "/success" && (
        <button
          className="bg-black text-white px-6 py-2 rounded-lg"
          onClick={handleClick}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
