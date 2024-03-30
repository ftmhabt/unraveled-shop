import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/Context";

export default function CartItem({ itemId,quantity }) {
  const { data,addToCart,removeFromCart } = useContext(ShopContext);
  const product = data.find((product) => product.id === itemId);
  return (
    <div className="flex w-[700px] h-[200px] justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-[100px] max-h-[100px]"
      />
      <div className="flex flex-col items-end gap-2">
        <div>{product.title}</div>
        <div>{product.price}$</div>
        <div className="flex gap-[1rem]">
          <button className="bg-red-800 py-[.25rem] px-[.75rem] text-[#E6E6E6] " onClick={()=>removeFromCart(itemId)}>-</button>
          <div className="w-[20px] text-center"> {quantity} </div>
          <button className="bg-red-800 py-[.25rem] px-[.75rem] text-[#E6E6E6] " onClick={()=>addToCart(itemId)}>+</button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
    itemId: PropTypes.number,
    quantity: PropTypes.number,
  };