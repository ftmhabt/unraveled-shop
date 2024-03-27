import PropTypes from "prop-types";

export default function Cart({ cart, setCart }) {
  return (
    <div>
      <h1>cart</h1>
      {cart.map((item) => 
        <div className="flex">
            <img src={item.image} alt={item.title} className="max-w-[200px] max-h-[250px]"/>
            <div>
                <div>{item.title}</div>
                <div>{item.price}$</div>
                <div className="flex"><button>less</button><button>more</button></div>
            </div>
            </div>
      )}
      <button>checkout</button>
    </div>
  );
}

Cart.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
};
