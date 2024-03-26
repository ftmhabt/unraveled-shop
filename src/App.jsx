import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
const [cart,setCart]=useState([]);
  return (
    <>
    {console.table(cart)}
      <Header cart={cart} setCart={setCart}/>
      <Body setCart={setCart}/>
      <Footer/>
    </>
  )
}

export default App
