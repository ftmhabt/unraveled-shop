import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/Context";

export default function Product() {
  const { data } = useContext(ShopContext);
  const { id } = useParams();
  if (!data) {
    return <div>Loading product...</div>;
  }

  let product = data.find((item) => (item?.id) === Number(id));

  return (
    <div>
      <div>{product?.title}</div>
      <img src={product?.image} alt={product?.title} />
    </div>
  );
}
