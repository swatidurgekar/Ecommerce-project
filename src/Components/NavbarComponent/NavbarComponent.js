import { Navbar, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">STORE</Navbar.Brand>
          <Button>Cart</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
