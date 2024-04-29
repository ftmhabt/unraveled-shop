import { useParams } from "react-router-dom";
import { useContext,useEffect } from "react";
import { ShopContext } from "../context/Context";
import { toast } from "react-toastify";

export default function Product() {
  const { cart, data, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  if (!data) {
    return <div>Loading product...</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let product = data.find((item) => item?.id === Number(id));

  const getCartQuantity = (cart, productId) => {
    const item = cart.find((item) => item.id === productId && item.quantity>0);
    return item ? `(${item.quantity})` : "";
  };

  return (
    <div className="flex p-[2rem] gap-[2rem] lg:flex-nowrap flex-wrap">
      <img
        className="max-w-[250px]"
        src={product?.image}
        alt={product?.title}
      />
      <div className="flex flex-col items-start gap-[2rem]">
        <div className="font-bold">{product?.title}</div>
        <div>{product?.description}</div>
        <button
          className="bg-red-800 px-[2rem] py-[.5rem] text-white"
          onClick={() => {
            addToCart(product.id);
            toast.success("added to cart!");
          }}
        >
          add to cart {getCartQuantity(cart, product.id)}
        </button>
      </div>
    </div>
  );
}
