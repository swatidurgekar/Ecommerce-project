import { Button, Card } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Store/AuthContext";
import classes from "./Page.module.css";

const Page = () => {
  const url = "https://ecommerce-16809-default-rtdb.firebaseio.com";
  const CartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const addToCart = async (product) => {
    let id = "";
    const email = authCtx.email;
    const newEmail = email.replace(/[@.]/g, "");
    CartCtx.addToCart(product);
    const res = await fetch(`${url}/${newEmail}.json`);
    if (res.ok) {
      const response = await res.json();
      if (response) {
        const values = Object.values(response);
        const keys = Object.keys(response);
        const itemFound = values.find((item) => item.title === product.title);
        const index = values.indexOf(itemFound);

        if (index >= 0) {
          id = keys[index];
          axios.put(`${url}/${newEmail}/${id}.json`, {
            title: itemFound.title,
            price: itemFound.price,
            quantity: itemFound.quantity + 1,
            imageUrl: itemFound.imageUrl,
          });
        } else {
          await fetch(`${url}/${newEmail}.json`, {
            method: "POST",
            body: JSON.stringify({
              title: product.title,
              price: product.price,
              quantity: product.quantity,
              imageUrl: product.imageUrl,
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
        }
      } else {
        await fetch(`${url}/${newEmail}.json`, {
          method: "POST",
          body: JSON.stringify({
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            imageUrl: product.imageUrl,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
      }
    }
  };

  const productsArr = [
    {
      title: "Colors",

      price: 100,
      quantity: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,
      quantity: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,
      quantity: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,
      quantity: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <div className={classes.page}>
        <div>
          <h1 className={classes.header}>The Generics</h1>
        </div>
        <div className={classes.content}>
          <div>
            {productsArr.map((product) => {
              return (
                <div className={classes.body} key={product.title}>
                  <Card.Title style={{ paddingTop: "15px" }}>
                    {product.title}
                  </Card.Title>
                  <Link to={`/store/${product.title}`}>
                    <Card.Img
                      src={product.imageUrl}
                      style={{ width: "15rem", paddingTop: "10px" }}
                    />
                  </Link>
                  <Card.Text>${product.price}</Card.Text>
                  <Button onClick={() => addToCart(product)}>
                    ADD TO CART
                  </Button>
                  <br />
                </div>
              );
            })}
            <Button
              style={{ margin: "0", position: "relative", left: "40%" }}
              variant="secondary"
            >
              See the cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
