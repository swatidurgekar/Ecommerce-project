import { useContext } from "react";
import { Button, Card, CloseButton, ListGroup } from "react-bootstrap";
import CartContext from "../Store/CartContext";
// import axios from "axios";
// import AuthContext from "../Store/AuthContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  // const authCtx = useContext(AuthContext);
  // const email = authCtx.email;
  // const newEmail = email.replace(/[@.]/g, "");
  // let products;

  // async function getProducts() {
  //   const res = await axios.get(
  //     `https://crudcrud.com/api/9fe66ba58d4c4e36ab77ef200a66865f/${newEmail}`
  //   );

  //   products = res.data[res.data.length - 1].cart;
  //   // console.log(products);
  // }
  // getProducts();
  // console.log(products);

  const functionHideCart = () => {
    return props.onClose();
  };

  return (
    <>
      <Card
        style={{
          paddingTop: "5rem",
          position: "absolute",
          zIndex: "100",
          width: "30rem",
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
