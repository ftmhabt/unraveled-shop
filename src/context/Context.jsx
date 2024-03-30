import { createContext } from "react";

export const ShopContext = createContext({
  data: [],
  loading: true,
  error: "",
  cart: [],
  addToCart: () => {},
  sortData: () => {},
});
