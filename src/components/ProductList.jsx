import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";
import Products from "./Products";

export default function ProductList() {

  const [category, setCategory] = useState("all");

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
    <div className="flex flex-col gap-[2rem] py-[2rem]">
      <div className="flex gap-3">
        {data && <FilterBar data={data} onChange={setCategory} />}
        {data && <SortBar data={data} setData={setData} />}
      </div>
      <Products
        data={data}
        loading={loading}
        error={error}
        category={category}
      />
    </div>
  );
}
