import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  const cartGif = "https://shoppie-img.static.domains/cartgif.gif";
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-2">
      <div className="mx-auto text-center">
        <div className="flex mt-4 justify-center items-center">
          <img
            src={cartGif}
            alt=""
            className="w-[280px] h-[240px] mb-4 rounded-full "
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold  mb-4">Your Cart is Empty!</h1>
          <Link to="/products" className="">
            <button className="bg-black text-white p-2 rounded-md">
              {" "}
              ← continue shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
