import ProductList from "./ProductList"

export default function Sale() {
  return (
    <div>
        <Hero/>
        <ProductList/>
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
