import { useContext } from "react";
import { Button, Card, CloseButton, ListGroup } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const functionHideCart = () => {
    return props.onClose();
  };

  return (
    <>
      <Card
        style={{
          paddingTop: "5rem",
          position: "fixed",
          zIndex: "100",
          width: "40rem",
          right: 0,
        }}
      >
        <Card.Body>
          <Card.Title>
            CART
            <CloseButton onClick={functionHideCart} />
          </Card.Title>
          {cartCtx.cartItems.map((cartElement) => {
            return (
              <Card key={cartElement.title} style={{ width: "180rem" }}>
                <ListGroup>
                  <ListGroup.Item>
                    <Card.Img
                      style={{ width: "5rem" }}
                      variant="top"
                      src={cartElement.imageUrl}
                    />
                    {`${cartElement.title}   ${cartElement.price}   ${cartElement.quantity}`}
                    <Button variant="danger">REMOVE</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};

export default Cart;
