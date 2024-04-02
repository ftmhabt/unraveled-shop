import { useContext } from "react";
import { ShopContext } from "../context/Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart,totalPrice } = useContext(ShopContext);

  return (
    <div className="flex flex-col min-h-[300px] items-center justify-between gap-5">
      <h1 className="text-center uppercase font-bold">your cart</h1>
      {cart.findIndex((item) => item.quantity>0)===-1&&<div>there is nothing in your cart</div>}
      {cart.map((item) => item.quantity>0?<CartItem key={item.id} itemId={item.id} quantity={item.quantity}/>:'')}
      <div>total price: {totalPrice.toFixed(2)}</div>
      <button className="bg-red-800 px-[2.5rem] py-[.25rem] text-[#E6E6E6]">checkout</button>
    </div>
  );
}

