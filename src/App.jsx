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
  const [cart, setCart] = useState([]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const sortData=(list)=>setData(list);

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
    <ShopContext.Provider value={{ cart, addToCart, data, loading, error, sortData }}>
      <Header />
      <Body />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
