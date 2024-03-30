import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/Context";

export default function Header() {
  const { cart } = useContext(ShopContext);
  return (
    <div className="flex py-[1rem] gap-[2rem] uppercase *:cursor-pointer hover:*:text-red-800">
        <div><Link to='/'>sale</Link></div>
        <div>clothing</div>
        <div>bags</div>
        <div>accessories</div>
        <div>about</div>
        <div className="ml-auto"><Link to='/cart'>cart{`(${cart.reduce((acc,item)=>acc+item.quantity,0)})`}</Link></div>
        <div>account</div>
        <div>search</div>
    </div>
  )
}

