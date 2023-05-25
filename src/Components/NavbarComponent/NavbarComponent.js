import { Navbar, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";
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
          <NavLink activeclassname={"active"} to="/home" end>
            HOME
          </NavLink>
          <NavLink activeclassname={"active"} to="/store">
            STORE
          </NavLink>
          <NavLink activeclassname={"active"} to="/about">
            ABOUT
          </NavLink>
          <NavLink activeclassname={"active"} to="/contact">
            CONTACT US
          </NavLink>

          <Button onClick={functionShowCart}>Cart : {number}</Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClose={functionHideCart} />}

      {/* <Outlet /> */}
    </>
  );
};

export default NavbarComponent;
