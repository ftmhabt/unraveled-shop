import { useContext } from "react";
import { ShopContext } from "../context/Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useContext(ShopContext);

  return (
    <div>
      <h1>cart</h1>
      {cart.map((item) => item.quantity>0?<CartItem key={item.id} itemId={item.id} quantity={item.quantity}/>:'')}
      <button>checkout</button>
    </div>
  );
}

