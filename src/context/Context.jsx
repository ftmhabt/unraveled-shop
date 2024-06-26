import { createContext } from "react";

export const ShopContext = createContext({
  data: [],
  loading: true,
  error: "",
  setData: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  removeAllFromCart: () => {},
  totalPrice:0, 
  setTotalPrice: () => {},
});
