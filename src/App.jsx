import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
const [cart,setCart]=useState([]);
  return (
    <>
      <Header cart={cart}/>
      <Body cart={cart} setCart={setCart}/>
      <Footer/>
    </>
  )
}

export default App
