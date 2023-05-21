import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addToCart: (product) => {},
});

export default CartContext;
