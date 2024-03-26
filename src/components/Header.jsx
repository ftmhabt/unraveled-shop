import PropTypes from "prop-types";

export default function Header({cart,setCart}) {
  return (
    <div className="flex py-[1rem] gap-[2rem] uppercase *:cursor-pointer hover:*:text-red-800">
        <div>sale</div>
        <div>clothing</div>
        <div>bags</div>
        <div>accessories</div>
        <div>about</div>
        <div className="ml-auto">cart {`(${cart.length+1})`}</div>
        <div>account</div>
        <div>search</div>
    </div>
  )
}


Header.PropTypes = {
  cart:PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};
