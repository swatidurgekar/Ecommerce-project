import { useState } from "react";
import { Button, Card, CloseButton, ListGroup } from "react-bootstrap";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const [cartElementsState, setCartElementsState] = useState(cartElements);

  const functionHideCart = () => {
    return props.onClose();
  };

  const removeItemFromCart = (cartElement) => {
    const index = cartElementsState
      .map((item) => item.title)
      .indexOf(cartElement.title);
    cartElementsState.splice(index, 1);
    console.log(cartElementsState);
    setCartElementsState(cartElementsState);
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
          {cartElementsState.map((cartElement) => {
            return (
              <Card style={{ width: "180rem" }}>
                <ListGroup>
                  <ListGroup.Item>
                    <Card.Img
                      style={{ width: "5rem" }}
                      variant="top"
                      src={cartElement.imageUrl}
                    />
                    {`${cartElement.title}   ${cartElement.price}   ${cartElement.quantity}`}
                    <Button
                      variant="danger"
                      onClick={() => removeItemFromCart(cartElement)}
                    >
                      REMOVE
                    </Button>
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
