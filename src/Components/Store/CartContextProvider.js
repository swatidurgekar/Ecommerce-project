import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const index = cartItems.map((item) => item.title).indexOf(product.title);
    if (index >= 0) {
      const arr = cartItems.filter((item) => {
        return item.title !== product.title;
      });
      arr.push({ ...product, quantity: cartItems[index].quantity + 1 });
      setCartItems(arr);
    } else {
      setCartItems((prevState) => {
        return [...prevState, product];
      });
    }
  };

  const cartContext = {
    cartItems: cartItems,
    addToCart: addToCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
