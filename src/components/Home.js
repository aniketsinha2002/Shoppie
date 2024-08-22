import { NavLink } from "react-router-dom";
import bg from "./utils/images/img3.png";
import Slider from "./Slider";
const Home = () => {
  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center relative h-screen">
      {/* Background Image */}
      <div className="absolute top-0 left-[100px] md:top-25 md:left-[200px] w-[180px] h-60 lg:w-[240px] lg:h-80 ">
        <img src={bg} className="" alt="Background" />
      </div>

      {/* Hero Section */}
      <div className="relative text-center py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 uppercase tracking-tight">
          Uncover Top <span className="text-[#292929ca]">Trends</span> Across
          All Categories
        </h1>
        <h2 className="text-lg md:text-2xl font-light text-gray-800 mb-8">
          Explore Exclusive Picks and Essentials Tailored for You
        </h2>
        <NavLink to="/products">
          <button className="bg-black text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition">
            Discover More Products
          </button>
        </NavLink>
        {/* <Slider /> */}
      </div>
    </div>
  );
};

export default Home;
