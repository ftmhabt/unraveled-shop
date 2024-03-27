import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Header() {
  const { cart } = useContext(ShopContext);
  return (
    <div className="flex py-[1rem] gap-[2rem] uppercase *:cursor-pointer hover:*:text-red-800">
        <div><Link to='/sale'>sale</Link></div>
        <div>clothing</div>
        <div>bags</div>
        <div>accessories</div>
        <div>about</div>
        <div className="ml-auto"><Link to='/cart'>cart {`(${cart.length})`}</Link></div>
        <div>account</div>
        <div>search</div>
    </div>
  )
}

