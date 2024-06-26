import Header from "./main/Header";
import Body from "./main/Body";
import Footer from "./main/Footer";
import { useState, useEffect, useReducer } from "react";
import { ShopContext } from "./context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartReducer from "./components/cartReducer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const [cart, dispatch] = useReducer(cartReducer, []);

  const [showSearch, setShowSearch] = useState(false);

  function toggleSearch() {
    setShowSearch(!showSearch);
  }

  const addToCart = (productId) => {
    dispatch({
      type: "add",
      id: productId,
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "remove",
      id: productId,
    });
  };

  const removeAllFromCart = (productId) => {
    dispatch({
      type: "removeAll",
      id: productId,
    });
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
        setData,
        cart,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        totalPrice,
        setTotalPrice,
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
      <Header toggleSearch={toggleSearch} />
      <Body showSearch={showSearch} toggleSearch={toggleSearch} />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
