import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/Context";

export default function Header({toggleSearch}) {
  const { cart } = useContext(ShopContext);
  return (
    <div className="flex py-[1rem] gap-[2rem] uppercase *:cursor-pointer hover:*:text-red-800">
        <div><Link to='/'>sale</Link></div>
        <div className="max-[864px]:hidden">clothing</div>
        <div className="max-[864px]:hidden">bags</div>
        <div className="max-[864px]:hidden">accessories</div>
        <div className="max-[864px]:hidden">about</div>
        <div className="ml-auto"><Link to='/cart'>cart{`(${cart.reduce((acc,item)=>acc+item.quantity,0)})`}</Link></div>
        <div className="max-[360px]:hidden">account</div>
        <div onClick={()=>toggleSearch()}>search</div>
    </div>
  )
}

Header.propTypes = {
  showSearch: PropTypes.bool,
  toggleSearch: PropTypes.func,
};
