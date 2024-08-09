import Card from "./Card";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Card />
    </div>
  );
};

export default Products;
