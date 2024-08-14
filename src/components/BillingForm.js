import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    zip: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate required fields
    ["firstName", "lastName", "email", "address1", "zip"].forEach((key) => {
      if (!formData[key]) newErrors[key] = `${key} is required`;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      dispatch(clearCart()); // Clear the cart
      navigate("/success"); // Navigate to the success page
    }
  };

  return (
    <div className="container mx-auto px-4 py-0">
      <div className="md:w-2/3 p-4 rounded-lg">
        <h3 className="text-4xl font-semibold mb-4">Billing Address</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["firstName", "lastName", "email", "address1", "zip"].map(
            (field) => (
              <div key={field} className="mb-3">
                <label className="tracking-widest font-light">
                  {field.replace(/([A-Z])/g, " $1").toUpperCase()}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`border ${
                    errors[field] ? "border-red-500" : "border-gray-600"
                  } p-2 rounded w-full`}
                  placeholder={`Enter ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-500">{errors[field]}</p>
                )}
              </div>
            )
          )}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
