import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createContext } from "react";
function App() {
  const ShopContext = createContext({
    cart: [],
    addToCart: () => {},
  });
  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      <Header />
      <Body />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
