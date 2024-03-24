import { useState } from "react";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";
import Products from "./Products";

export default function ProductList() {
  const [category, SetCategory] = useState('all');
  const [sort, SetSort] = useState('newest');

  return (
    <div>
      <div>
        <FilterBar category={category} onChange={SetCategory} />
        <SortBar sort={sort} onChange={SetSort} />
      </div>
      <Products category={category} sort={sort}/>
    </div>
  );
}
