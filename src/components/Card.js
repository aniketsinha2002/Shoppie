import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";

function MyCard() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(20);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleCartClick(product) {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
      })
    );
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <FaCheckCircle color="green" />,
      theme: "light",
      className:
        "fixed top-5 right-5 py-2 px-2 rounded-lg shadow-lg z-10 w-[185px] sm:w-auto ",
    });
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=fashion`)
      .then((data) => data.json())
      .then((result) => {
        setAllProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [limit]);

  // Scroll event
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setLimit((prev) => prev + 2);
    }
  };

  // Add event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = allProducts.map((product) => (
    <div className="col-md-4 bg-gray-50" key={product.id}>
      <div className="m-2 p-4 shadow-md border-none rounded-lg bg-white">
        <img
          src={product.thumbnail}
          className="bg-gray-50 w-full h-48 object-cover grayscale brightness-110 rounded-t-lg"
          alt={product.title}
        />
        <div className="text-center p-4">
          <h6 className="font-light text-black text-xl">
            {product.title.length > 15
              ? `${product.title.slice(0, 15)}...`
              : product.title}
          </h6>
          <p className="text-gray-700">${product.price.toFixed(2)}</p>
          <button
            className="bg-black text-white px-6 py-2 rounded-lg"
            onClick={() => handleCartClick(product)} // Pass function reference here
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row px-5">
      {cards}
      {loading && <Loader />}
      <ToastContainer /> {/* Move ToastContainer here */}
    </div>
  );
}

export default MyCard;
