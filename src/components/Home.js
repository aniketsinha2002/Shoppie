import { NavLink } from "react-router-dom";

import Banner from "./Banner";
import Categories from "./Categories";
import Flashsale from "./Flashsale";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  p-10">
        <Categories />

        <div className="w-full lg:w-2/3 flex flex-col lg:items-start lg:justify-start lg:ml-4 lg:pt-4">
          <div className="w-full">
            <Banner />
          </div>
          <div className="flex justify-center lg:justify-start mt-4 lg:mt-6">
            <NavLink to="/products">
              <button className="bg-black text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition">
                Discover More Products
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="">
        <Flashsale />
      </div>
    </div>
  );
};

export default Home;
