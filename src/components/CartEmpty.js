import React from "react";
import { Link } from "react-router-dom";
import cartGif from "./utils/images/cartgif.gif";

const CartEmpty = () => {
  // const cartGif = "https://shoppie-img.static.domains/cartgif.gif";

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-2">
      <img
        src={cartGif}
        alt="Empty Cart"
        className="w-[280px] h-[240px] mb-4 rounded-full"
      />
      <h1 className="text-3xl font-bold mb-4">Your Cart is Empty!</h1>
      <Link to="/products">
        <button className="bg-black text-white p-2 rounded-md">
          ← continue shopping
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
