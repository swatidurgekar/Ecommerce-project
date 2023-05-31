import { Button, Card } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Store/AuthContext";

const Page = () => {
  const CartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const addToCart = async (product) => {
    let id = "";
    const email = authCtx.email;
    const newEmail = email.replace(/[@.]/g, "");
    CartCtx.addToCart(product);
    const res = await axios.get(
      `https://crudcrud.com/api/aaa8e2caf6f540778ebb8657cba7421b/${newEmail}`
    );
    res.data.map((item) => {
      if (item.title === product.title) {
        id = item._id;
        axios.put(
          `https://crudcrud.com/api/aaa8e2caf6f540778ebb8657cba7421b/${newEmail}/${item._id}`,
          {
            title: item.title,
            price: item.price,
            quantity: item.quantity + 1,
            imageUrl: item.imageUrl,
          }
        );
      }
    });
    if (id === "") {
      await axios.post(
        `https://crudcrud.com/api/aaa8e2caf6f540778ebb8657cba7421b/${newEmail}`,
        {
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          imageUrl: product.imageUrl,
        }
      );
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
      <Card style={{ paddingTop: "2rem", width: "100rem" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "5rem", alignContent: "center" }}>
            The Generics
          </Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "100rem" }}>
        <Card.Body>
          {productsArr.map((product) => {
            return (
              <Card.Body key={product.title}>
                <Card.Title>{product.title}</Card.Title>
                <Link to={`/store/${product.title}`}>
                  <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    style={{ width: "18rem", display: "flex-box" }}
                  />
                </Link>
                <Card.Text>${product.price}</Card.Text>
                <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
                <br />
              </Card.Body>
            );
          })}
        </Card.Body>
      </Card>
      <Button variant="secondary">See the cart</Button>
    </>
  );
};

export default Page;
