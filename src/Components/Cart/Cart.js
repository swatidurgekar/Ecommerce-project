import { useContext } from "react";
import { Button, Card, CloseButton } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import axios from "axios";

const Cart = (props) => {
  const url = "https://ecommerce-16809-default-rtdb.firebaseio.com";
  const cartCtx = useContext(CartContext);

  const remove = async (cartElement) => {
    cartCtx.removeFromCart(cartElement);
    let id = "";
    const email = localStorage.getItem("email");
    const newEmail = email.replace(/[@.]/g, "");
    const res = await fetch(`${url}/${newEmail}.json`);
    if (res.ok) {
      const response = await res.json();
      const values = Object.values(response);
      const keys = Object.keys(response);
      const itemFound = values.find((item) => item.title === cartElement.title);
      const index = values.indexOf(itemFound);

      id = keys[index];
      if (itemFound.quantity > 1) {
        axios.put(`${url}/${newEmail}/${id}.json`, {
          title: itemFound.title,
          price: itemFound.price,
          quantity: itemFound.quantity - 1,
          imageUrl: itemFound.imageUrl,
        });
      } else {
        axios.delete(`${url}/${newEmail}/${id}.json`);
      }
    }
  };

  const functionHideCart = () => {
    return props.onClose();
  };

  return (
    <>
      <Card
        style={{
          paddingTop: "25rem",
          position: "absolute",
          zIndex: "100",
          width: "30%",
          right: 0,
        }}
      >
        <Card.Body>
          <Card.Title>
            CART
            <CloseButton onClick={functionHideCart} />
          </Card.Title>
          <ul
            style={{ width: "100%" }}
            className="list-group list-group-horizontal"
          >
            <li style={{ width: "28%" }} className="list-group-item">
              ITEM
            </li>
            <li style={{ width: "20%" }} className="list-group-item">
              TITLE
            </li>
            <li style={{ width: "18%" }} className="list-group-item">
              PRICE
            </li>
            <li style={{ width: "15%" }} className="list-group-item">
              QTY
            </li>
          </ul>
          {cartCtx.cartItems.map((cartElement) => {
            return (
              <div
                key={cartElement.title}
                className="card"
                style={{ display: "flex", margin: "auto", width: "100%" }}
              >
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <img
                      alt={cartElement.title}
                      src={cartElement.imageUrl}
                      style={{ width: "5rem", paddingTop: 0 }}
                    />
                  </li>
                  <li style={{ width: "30%" }} className="list-group-item">
                    {cartElement.title}
                  </li>
                  <li style={{ width: "25%" }} className="list-group-item">
                    {cartElement.price}
                  </li>
                  <li style={{ width: "25%" }} className="list-group-item">
                    {cartElement.quantity}
                  </li>
                  <Button
                    style={{
                      height: "10%",
                      margin: "auto",
                      width: "22%",
                    }}
                    className="btn-danger"
                    onClick={() => remove(cartElement)}
                  >
                    REMOVE
                  </Button>
                </ul>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};

export default Cart;
