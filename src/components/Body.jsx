import Sale from "./Sale"
import Cart from "./Cart";
import PropTypes from "prop-types";

export default function Body({cart,setCart}) {
  return (
    <>
        {/* <Sale cart={cart} setCart={setCart}/> */}
        <Cart cart={cart} setCart={setCart} />
    </>
  )
}

Body.PropTypes = {
  cart:PropTypes.arrayOf(PropTypes.object),
    setCart: PropTypes.func,
};
