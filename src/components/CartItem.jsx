import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../App";

export default function CartItem({ itemId,quantity }) {
  const { data,addToCart,removeFromCart } = useContext(ShopContext);
  const product = data.find((product) => product.id === itemId);
  return (
    <div className="flex">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-[200px] max-h-[250px]"
      />
      <div>
        <div>{product.title}</div>
        <div>{product.price}$</div>
        <div className="flex">
          <button onClick={()=>removeFromCart(itemId)}>-</button>
          <div> {quantity} </div>
          <button onClick={()=>addToCart(itemId)}>+</button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
    itemId: PropTypes.number,
    quantity: PropTypes.number,
  };