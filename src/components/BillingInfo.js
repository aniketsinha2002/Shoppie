import React from "react";

const BillingInfo = ({ items, total }) => {
  return (
    <div className=" px-4 py-4 md:w-2/3">
      <h3 className="text-4xl font-semibold mb-4">Billing Info</h3>
      <div className="mb-2 text-lg">Total Products: {items.length}</div>
      <div className="mb-2 text-xl font-semibold">
        Final Price: ${total.toFixed(0)}
      </div>
    </div>
  );
};

export default BillingInfo;
