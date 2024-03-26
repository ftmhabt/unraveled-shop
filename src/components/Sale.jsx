import ProductList from "./ProductList"
import PropTypes from "prop-types";

export default function Sale({setCart}) {
  return (
    <div>
        <Hero/>
        <ProductList setCart={setCart}/>
    </div>
  )
}

function Hero(){
    return(
        <div className="text-center uppercase bg-hero-pattern bg-cover h-[90vh] pt-[60vh]">
            <div className="hero-text text-9xl text-red-800">unraveled</div>
            <button className="bg-red-800 px-[2.5rem] py-[.25rem] text-[#E6E6E6] mt-[1rem]">shop now</button>
        </div>
    )
}


Sale.PropTypes = {
  setCart: PropTypes.func,
};
