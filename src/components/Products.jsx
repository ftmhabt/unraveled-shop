import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ShopContext } from "../context/Context";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Products({ category='all',searchKey='' }) {
  const { addToCart, cart, data, loading, error,totalPrice, setTotalPrice } = useContext(ShopContext);

  const [hoveredId, setHoveredId] = useState("");

  const handleHover = (isHovered, productId) => {
    isHovered ? setHoveredId(productId) : setHoveredId("");
  };

  const getCartQuantity = (cart, productId) => {
    const item = cart.find((item) => item.id === productId && item.quantity>0);
    return item ? `(${item.quantity})` : "";
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
              category === "all" 
              ? product.title.toLowerCase().includes(searchKey) 
              : product.category === category
            )
            .map((product) => (
              <div
                className="flex flex-col w-[250px] h-[360px] gap-5"
                key={product.id}
                onMouseEnter={() => handleHover(true, product.id)}
                onMouseLeave={() => handleHover(false, product.id)}
              >
                <div className="flex relative items-center w-[200px] h-[250px] mx-auto">
                  <img
                    className="max-w-[200px] max-h-[250px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <button
                    className={`${
                      hoveredId === product.id ? "block" : "hidden"
                    } absolute bg-red-800 px-[2rem] py-[.5rem] text-white`}
                    onClick={() => {
                      addToCart(product.id);
                      toast.success("added to cart!");
                      setTotalPrice(totalPrice+product.price)
                    }}
                  >
                    add to cart {getCartQuantity(cart, product.id)}
                  </button>
                </div>
                <Link className="overflow-hidden" to={`product/${product.id}`}>{product.title}</Link>
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
  searchKey: PropTypes.string,
};
