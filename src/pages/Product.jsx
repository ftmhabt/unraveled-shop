import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/Context";

export default function Product() {
  const { data } = useContext(ShopContext);
  const { id } = useParams();
  if (!data) {
    return <div>Loading product...</div>;
  }

  let product = data.find((item) => item?.id === id);

  return (
    <div>
      {product?.title}
    </div>
  );
}

