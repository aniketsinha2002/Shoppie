import React from "react";
import CountDown from "ant-design-pro/lib/CountDown";
import "ant-design-pro/dist/ant-design-pro.css"; // Import the necessary styles
import { NavLink } from "react-router-dom";

const Flashsale = () => {
  const targetTime = Date.now() + 1 * 24 * 60 * 60 * 1000; // 3 days from now

  return (
    <div className="flex flex-col items-center text-center py-8">
      <h2 className="text-3xl font-light mb-4">Summer Sale Ends in</h2>
      <CountDown
        style={{
          marginBottom: "16px",
          gap: "10px",
          letterSpacing: "20px",
          fontWeight: "",
        }}
        className="text-2xl md:text-5xl"
        target={targetTime}
        onEnd={() => console.log("Countdown ended!")}
      />
      <NavLink to="/products">
        <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition mt-4">
          Grab Deals
        </button>
      </NavLink>
    </div>
  );
};

export default Flashsale;
