import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png"
          alt="green tick"
          className="w-24 h-24 mb-4 grayscale"
        />
        <div className="text-xl tracking-wide font-bold mb-2 py-2">
          Order Placed Successfully!
        </div>
        <div className="text-lg text-gray-300 py-2">
          Thank you for your order. You will receive a confirmation email
          shortly.
        </div>
        <button
          className="bg-black text-white px-6 py-4 rounded-lg"
          onClick={handleClick}
        >
          Go to Homepage
        </button>
      </div>
    </>
  );
};

export default Success;
