import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";
import Discount from "./Discount";

const Checkout = () => {
  const { items, total } = useSelector((state) => state.cart); // Destructure items and total

  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  // Scroll to the top when the component mounts
  // Check local storage on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const discountStatus = localStorage.getItem("discountApplied");
    if (discountStatus === "true") {
      setIsDiscountApplied(true);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {isDiscountApplied && <Discount />}
        <div className="flex flex-col md:flex-row justify-between">
          <BillingForm />
          <BillingInfo items={items} total={total} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
