import React, { useState } from "react";
import Header from "./Header";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
import BillingForm from "./BillingForm";

const Checkout = () => {
  const items = useSelector((state) => state.cart);
  const total = items.reduce((a, b) => a + b.price * b.quantity, 0); // Consider total quantity

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <BillingForm />

          <div className="md:w-1/3 mt-4 md:mt-0">
            <OrderSummary items={items} total={total} link="/success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
