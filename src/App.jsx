import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState, createContext } from "react";

export const ShopContext = createContext({
  cart: [],
  addToCart: () => {},
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      <Header />
      <Body />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
