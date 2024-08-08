import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty!</h1>
        <Link to="/products" className="">
          <button className="bg-black text-white p-2 rounded-md">
            {" "}
            ← continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
