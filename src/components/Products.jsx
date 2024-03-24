import { useState, useEffect } from "react";

export default function Products() {
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
    <div className="flex justify-center flex-wrap gap-20 items-end">
        {
            (loading && <div className="text-xl font-medium">loading posts...</div>) ||
            (error && <div className="text-red-700">{error}</div>) ||
            (data && data.map((product) => <div className="flex flex-col w-[250px] h-[350px] gap-5" key={product.id}>
                <div className="flex items-center w-[200px] h-[250px]">
                <img className="max-w-[200px] max-h-[250px]" src={product.image} alt={product.title} />
                </div>
                <div className="overflow-hidden max-h-[70px]">{product.title}</div>
            </div>))
        }
    </div>
    
  );
}
