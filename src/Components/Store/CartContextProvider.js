import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";
import AuthContext from "./AuthContext";

const CartContextProvider = (props) => {
  const url = "https://ecommerce-16809-default-rtdb.firebaseio.com/";
  let products;
  let newEmail;
  const authCtx = useContext(AuthContext);
  if (authCtx.email) {
    const email = authCtx.email;
    newEmail = email.replace(/[@.]/g, "");
  }

  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(`${url}/${newEmail}.json`);
        if (res.ok) {
          const response = await res.json();
          if (response) {
            setCartItems(Object.values(response));
          } else {
            setCartItems([]);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    {
      authCtx.isLoggedIn && fetchData();
    }
  }, [newEmail]);

  const addToCart = (product) => {
    if (cartItems.length !== 0) {
      const index = cartItems.map((item) => item.title).indexOf(product.title);
      if (index >= 0) {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = newCartItems[index].quantity + 1;
        setCartItems(newCartItems);
      } else {
        setCartItems((prevState) => {
          return [...prevState, product];
        });
      }
    } else {
      setCartItems((prevState) => {
        return [...prevState, product];
      });
    }

    console.log(cartItems);
  };

  const removeFromCart = (product) => {
    const index = cartItems.map((item) => item.title).indexOf(product.title);
    if (cartItems[index].quantity > 1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity = newCartItems[index].quantity - 1;
      setCartItems(newCartItems);
    } else {
      const arr = cartItems.filter((item) => item.title !== product.title);
      setCartItems(arr);
    }
  };

  const cartContext = {
    cartItems: cartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
