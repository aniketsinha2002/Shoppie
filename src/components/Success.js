import React from 'react';
import Header from './Header';

const Success = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png" 
          alt="green tick" 
          className="w-24 h-24 mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
        <p className="text-lg text-gray-600">Thank you for your order. You will receive a confirmation email shortly.</p>
      </div>
    </div>
  );
};

export default Success;
