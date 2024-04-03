import ProductList from "../components/ProductList"

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
        <div className="text-center uppercase bg-hero-pattern bg-cover bg-center h-[90vh] pt-[60vh]">
            <div className="hero-text text-red-800 lg:text-9xl text-[3rem]">unraveled</div>
            <button className="bg-red-800 px-[2.5rem] py-[.25rem] text-[#E6E6E6] mt-[1rem]">shop now</button>
        </div>
    )
}

