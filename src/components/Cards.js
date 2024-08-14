import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";

function MyCard() {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const [limit, setLimit] = useState(8);

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
    fetchMoreData();
  }, [limit]);

  const fetchMoreData = () => {
    fetch(`https://dummyjson.com/products/search?q=fashion&limit=${limit}`)
      .then((data) => data.json())
      .then((result) => {
        setAllProducts((prevProducts) => [...prevProducts, ...result.products]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      id="scrollableDiv"
      className="px-5 h-[515px] md:h-[850px] lg:h-[530px] overflow-y-scroll"
    >
      <InfiniteScroll
        dataLength={allProducts.length}
        next={() => setLimit((prev) => prev + 10)}
        hasMore={allProducts.length < 80}
        loader={<Loader />}
        scrollableTarget="scrollableDiv"
        className="overflow-x-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allProducts.map((product) => (
            <div className="bg-gray-50" key={product.id}>
              <div className="m-2 p-4 shadow-md border-none rounded-lg bg-white">
                <img
                  src={product.thumbnail}
                  className="bg-gray-50 w-80 h-40 object-cover brightness-110 shadow-sm"
                  alt={product.title}
                />
                <div className="text-center py-4">
                  <h5 className="font-light text-black text-center">
                    {product.title.length > 28
                      ? `${product.title.slice(0, 28)}...`
                      : product.title}
                  </h5>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  <button
                    className="bg-black text-white px-6 py-2 rounded-lg"
                    onClick={() => handleCartClick(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <ToastContainer />
    </div>
  );
}
export default MyCard;
