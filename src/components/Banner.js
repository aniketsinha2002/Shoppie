import React from "react";
import { Carousel } from "antd";
import b1 from "./utils/images/banner/b1.avif";
import b2 from "./utils/images/banner/b2.jpg";
import b3 from "./utils/images/banner/b3.jpg";
import b4 from "./utils/images/banner/b4.jpg";
import b5 from "./utils/images/banner/b5.jpg";
import b6 from "./utils/images/banner/b6.jpg";

const App = () => (
  <>
    <Carousel
      autoplay
      autoplaySpeed={1500} // Convert to milliseconds
      arrows
      dotPosition="bottom"
      nextArrow={<div className="absolute left-0" />} // Custom left arrow position
    >
      <div className="relative">
        <img
          className="w-full h-[220px] md:h-[320px] object-cover"
          src={b4}
          alt="Banner 1"
        />
      </div>
      <div className="relative">
        <img
          className="w-full h-[220px] md:h-[320px] object-cover"
          src={b5}
          alt="Banner 2"
        />
      </div>
      <div className="relative">
        <img
          className="w-full h-[220px] md:h-[320px] object-cover"
          src={b3}
          alt="Banner 3"
        />
      </div>
    </Carousel>
  </>
);

export default App;
