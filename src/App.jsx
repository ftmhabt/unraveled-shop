import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState, useEffect, createContext } from "react";

export const ShopContext = createContext({
  data: [],
  loading: true,
  error: "",
  cart: [],
  addToCart: () => {},
  sortData: () => {},
});

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const updatedCart = [...cart];
  
    const existingItemIndex = updatedCart.findIndex(item => item.id === productId);
  
    if (existingItemIndex === -1) {
      updatedCart.push({ id: productId, quantity: 1 });
    } else {
      updatedCart[existingItemIndex].quantity += 1;
    }
  
    setCart(updatedCart);
  };
  

  const sortData = (list) => setData(list);

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        postsData.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        setData(postsData);
        setError(null);
      } catch (err) {
        setData(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    FetchData();
  }, []);

  return (
    <ShopContext.Provider
      value={{ cart, addToCart, data, loading, error, sortData }}
    >
      <Header />
      <Body />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
