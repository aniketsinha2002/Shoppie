import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function MyCard() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(20);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
            onClick={() =>
              dispatch(
                addItem({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.thumbnail,
                })
              )
            }
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
    </div>
  );
}

export default MyCard;
