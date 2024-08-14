// OrderSummary.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { applyDiscount } from "../redux/slices/cartSlice"; // Adjust the path
import Discount from "./Discount";

const OrderSummary = ({ items, total, link }) => {
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check local storage on component mount
  useEffect(() => {
    const discountStatus = localStorage.getItem("discountApplied");
    if (discountStatus === "true") {
      setIsDiscountApplied(true);
    }
  }, []);

  const handleClick = () => {
    navigate(link);
  };

  const handleDiscountClick = () => {
    if (!isDiscountApplied) {
      setIsDiscountApplied(true);
      dispatch(applyDiscount(0.1)); // Apply a 10% discount
      localStorage.setItem("discountApplied", "true"); // Store status in local storage
    }
  };

  const discountAmount = total * 0.1; // 10% discount
  const finalTotal = total + 30 - discountAmount; // Total after discount and shipping

  return (
    <div className="rounded-lg px-4 md:px-6">
      <h3 className="text-4xl font-semibold mb-4">Order Summary</h3>

      {/* Green Banner for Discount */}
      {isDiscountApplied && <Discount />}

      <div className="mb-2 text-lg">
        Products ({items.length}): ${total.toFixed(2)}
      </div>
      <div className="mb-2 text-lg">Shipping: $30</div>

      <div className="mb-4 text-xl font-semibold">
        {isDiscountApplied ? (
          <>
            <span>Total amount: </span>
            <span className="line-through">${(total + 30).toFixed(2)}</span>
            <span className="ml-2">${finalTotal.toFixed(0)}</span>
          </>
        ) : (
          <span>Total amount: ${(total + 30).toFixed(2)}</span>
        )}
      </div>

      <div className="flex flex-col w-40">
        {!isDiscountApplied && (
          <button
            className="bg-green-500 border-2 border-green-700 hover:bg-green-400 text-white px-4 py-1 rounded-lg text-sm w-30"
            onClick={handleDiscountClick}
          >
            Apply 10% Off
          </button>
        )}

        <button
          className="bg-black text-white px-6 py-2 rounded-lg mt-4"
          onClick={handleClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
