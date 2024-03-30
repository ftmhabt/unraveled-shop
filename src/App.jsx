import Header from "./main/Header";
import Body from "./main/Body";
import Footer from "./main/Footer";
import { useState, useEffect } from "react";
import { ShopContext } from "./context/Context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const updatedCart = [...cart];

    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );

    if (existingItemIndex === -1) {
      updatedCart.push({ id: productId, quantity: 1 });
    } else {
      updatedCart[existingItemIndex].quantity += 1;
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];

    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );

    updatedCart[existingItemIndex].quantity -= 1;

    setCart(updatedCart);
  };

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
      value={{
        data,
        loading,
        error,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <Header />
      <Body />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
