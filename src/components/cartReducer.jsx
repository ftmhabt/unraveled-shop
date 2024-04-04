export default function cartReducer(cart, action) {
  switch (action.type) {
    case "add": {
      const updatedCart = [...cart];

      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === action.id
      );

      if (existingItemIndex === -1) {
        updatedCart.push({ id: action.id, quantity: 1 });
      } else {
        updatedCart[existingItemIndex].quantity += 1;
      }

      return updatedCart;
    }
    case "remove": {
      const updatedCart = [...cart];

      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === action.id
      );

      updatedCart[existingItemIndex].quantity > 0
        ? (updatedCart[existingItemIndex].quantity -= 1)
        : (updatedCart[existingItemIndex].quantity = null);

      return updatedCart;
    }
    case "removeAll": {
      const updatedCart = [...cart];

      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === action.id
      );

      updatedCart[existingItemIndex].quantity = null;

      return updatedCart;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
