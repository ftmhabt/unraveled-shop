import { useState,useEffect } from "react";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";
import Products from "./Products";

export default function ProductList() {
  const [category, SetCategory] = useState('all');
  const [sort, SetSort] = useState('newest');


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
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
    <div>
      <div>
        <FilterBar data={data} onChange={SetCategory} />
        <SortBar sort={sort} onChange={SetSort} />
      </div>
      <Products data={data} loading={loading} error={error} category={category} sort={sort}/>
    </div>
  );
}


