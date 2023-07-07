import { Navbar, Container, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import AuthContext from "../Store/AuthContext";
import { Redirect, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavbarComponent.css";
import { lazy, Suspense } from "react";

const NavbarComponent = () => {
  const Cart = lazy(() => import("../Cart/Cart"));

  const history = useHistory();
  const [showCart, setShowCart] = useState(false);
  const CartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  let number = 0;

  CartCtx.cartItems.forEach((item) => {
    number += item.quantity;
  });

  const logoutHandler = () => {
    authCtx.logoutHandler();
    history.replace("/login");
    setShowCart(false);
  };

  const functionShowCart = () => {
    setShowCart(true);
  };

  const functionHideCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Navbar fixed="top" bg="dark" expand="sm" variant="dark">
        <Container>
          <NavLink activeclassname={"active"} to="/home">
            HOME
          </NavLink>
          <NavLink activeclassname={"active"} to="/store">
            {authCtx.isLoggedIn ? " STORE" : <Redirect to="/login" />}
          </NavLink>
          <NavLink activeclassname={"active"} to="/about">
            ABOUT
          </NavLink>
          <NavLink activeclassname={"active"} to="/contact">
            CONTACT US
          </NavLink>
          {!authCtx.isLoggedIn && (
            <NavLink activeclassname={"active"} to="/login">
              LOGIN
            </NavLink>
          )}

          {authCtx.isLoggedIn && (
            <Button onClick={functionShowCart}>Cart : {number}</Button>
          )}
          {authCtx.isLoggedIn && (
            <Button onClick={logoutHandler}>LOGOUT</Button>
          )}
        </Container>
      </Navbar>
      {showCart && (
        <Suspense fallback={<p>Loading...</p>}>
          <Cart onClose={functionHideCart} />
        </Suspense>
      )}
    </>
  );
};

export default NavbarComponent;
