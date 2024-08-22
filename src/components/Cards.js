import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import { Pagination } from "antd";

function MyCard({ priceRange }) {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 15;
  const totalItems = 35;

  const handleCartClick = (product) => {
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
      icon: <FaCheckCircle color="green" />,
      theme: "light",
      className:
        "fixed top-5 right-5 py-2 px-2 rounded-lg shadow-lg z-10 w-[185px] sm:w-auto",
    });
  };

  const fetchProducts = () => {
    setLoading(true);
    fetch(
      `
      https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
        (currentPage + 3) * itemsPerPage
      }&select=title,price,description,thumbnail`
    )
      .then((response) => response.json())
      .then((result) => {
        setAllProducts(result.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  // Filtering products based on price range
  const filteredProducts = allProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-5">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 min-h-screen">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="m-2 p-4 shadow-md rounded-lg h-[345px]"
            >
              <div className="h-[155px] relative bg-gradient-to-br from-[#ffffff] to-[#00000011] rounded-lg flex justify-center items-center overflow-visible">
                <div className="flex">
                  <img
                    src={product.thumbnail}
                    className="h-48 w-80 object-cover brightness-20 contrast-150 transform -translate-x-12 translate-y-2 md:translate-y-3"
                    alt={product.title}
                  />
                </div>
              </div>

              <div className="text-center py-4">
                <h5 className="font-light text-black">
                  {product.title.length > 11
                    ? `${product.title.slice(0, 15)}`
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
          ))}
        </div>
      )}
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalItems}
        align={"center"}
        borderRadiusLG
        className="m-10"
      />
      <ToastContainer />
    </div>
  );
}

export default MyCard;
