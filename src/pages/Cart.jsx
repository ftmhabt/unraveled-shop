import { useContext } from "react";
import { ShopContext } from "../context/Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useContext(ShopContext);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-center uppercase font-bold mb-[1rem]">your cart</h1>
      {cart.map((item) => item.quantity>0?<CartItem key={item.id} itemId={item.id} quantity={item.quantity}/>:'')}
      <button className="bg-red-800 px-[2.5rem] py-[.25rem] text-[#E6E6E6]">checkout</button>
    </div>
  );
}

