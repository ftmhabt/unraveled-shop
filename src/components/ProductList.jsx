import { useState, useContext } from "react";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";
import Products from "./Products";
import { ShopContext } from "../context/Context";

export default function ProductList() {


  const {data}=useContext(ShopContext);
  const [category, setCategory] = useState("all");

  return (
    <div className="flex flex-col gap-[2rem] py-[2rem]">
      <div className="flex gap-3">
        {data && <FilterBar onChange={setCategory} />}
        {data && <SortBar />}
      </div>
      <Products
        category={category}
      />
    </div>
  );
}
