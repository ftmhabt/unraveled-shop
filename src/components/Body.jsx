import Sale from "./Sale"
import PropTypes from "prop-types";

export default function Body({setCart}) {
  return (
    <>
        <Sale setCart={setCart}/>
    </>
  )
}

Body.PropTypes = {
  setCart: PropTypes.func,
};
