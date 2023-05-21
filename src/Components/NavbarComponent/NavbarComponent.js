import { Navbar, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";

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
          <Navbar.Brand href="/">STORE</Navbar.Brand>
          <Button onClick={functionShowCart}>Cart : {number}</Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClose={functionHideCart} />}
    </>
  );
};

export default NavbarComponent;
