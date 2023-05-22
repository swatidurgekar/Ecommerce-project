import { Navbar, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";

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
          <Link to="/">HOME</Link>
          <Link to="/">STORE</Link>
          <Link to="/about">ABOUT</Link>
          <Button onClick={functionShowCart}>Cart : {number}</Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClose={functionHideCart} />}
    </>
  );
};

export default NavbarComponent;
