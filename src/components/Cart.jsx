import { useContext } from "react";
import { ShopContext } from "../App";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useContext(ShopContext);

  return (
    <div>
      <h1>cart</h1>
      {cart.map((item) => <CartItem key={item.id} itemId={item.id} quantity={item.quantity}/>)}
      <button>checkout</button>
    </div>
  );
}

