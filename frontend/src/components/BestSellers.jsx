import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const [bestSellers, setbestSellers] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller == true);
    setbestSellers(bestProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex provident
          eligendi delectus velit animi eveniet, cum aliquid reiciendis
          architecto, cupiditate libero recusandae est! Iure earum, corporis
          odio cupiditate ullam vitae?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default BestSellers;
