import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";
import AuthContext from "./AuthContext";

const CartContextProvider = (props) => {
  let products;
  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const newEmail = email.replace(/[@.]/g, "");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(
          `https://crudcrud.com/api/aaa8e2caf6f540778ebb8657cba7421b/${newEmail}`
        );
        // console.log(res.data);
        setCartItems(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    {
      authCtx.isLoggedIn && fetchData();
    }
  }, []);

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
