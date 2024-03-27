import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ShopContext } from "../App";

export default function Products({ category }) {
  const { addToCart ,data,loading,error} = useContext(ShopContext);


  const [hoveredId, setHoveredId] = useState("");

  const handleHover = (isHovered, productId) => {
    isHovered ? setHoveredId(productId) : setHoveredId("");
  };


  return (
    <div className="flex justify-center flex-wrap gap-20 items-end">
      {(loading && (
        <div className="text-xl font-medium">loading posts...</div>
      )) ||
        (error && <div className="text-red-700">{error}</div>) ||
        (data &&
          data
            .filter((product) =>
              category === "all" ? product : product.category === category
            )
            .map((product) => (
              <div
                className="flex flex-col w-[250px] h-[350px] gap-5"
                key={product.id}
                onMouseEnter={() => handleHover(true, product.id)}
                onMouseLeave={() => handleHover(false, product.id)}
              >
                <div className="flex relative items-center w-[200px] h-[250px]">
                  <img
                    className="max-w-[200px] max-h-[250px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <button
                    className={`${
                      hoveredId === product.id ? "block" : "hidden"
                    } absolute bg-red-800 px-[2rem] py-[.5rem] text-white`}
                    onClick={() => addToCart(product.id)}
                  >
                    add to cart
                  </button>
                </div>
                <div className="">{product.title}</div>
                <div>{product.price}$</div>
              </div>
            )))}
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool,
  category: PropTypes.string,
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};
