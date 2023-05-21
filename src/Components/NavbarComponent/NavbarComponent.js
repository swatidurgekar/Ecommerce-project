import { Navbar, Container, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useState } from "react";

const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);

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
          <Button onClick={functionShowCart}>Cart</Button>
        </Container>
      </Navbar>
      {showCart && <Cart onClose={functionHideCart} />}
    </>
  );
};

export default NavbarComponent;
