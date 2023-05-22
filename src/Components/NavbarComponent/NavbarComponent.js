import { Navbar, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);
  const CartCtx = useContext(CartContext);
  let number = 0;
  CartCtx.cartItems.forEach((item) => {
    number += item.quantity;
  });

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
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
            end
          >
            STORE
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/about"
          >
            ABOUT
          </NavLink>

          <Button onClick={functionShowCart}>Cart : {number}</Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClose={functionHideCart} />}

      <Outlet />
    </>
  );
};

export default NavbarComponent;
