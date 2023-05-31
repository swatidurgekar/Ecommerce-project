import { useParams } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <div>
      <img alt="img1" src={`/${params.productId}1.jpg`}></img>
      <img alt="img2" src={`/${params.productId}2.jpg`}></img>
      <img alt="img3" src={`/${params.productId}3.jpg`}></img>
      <img alt="img4" src={`/${params.productId}4.jpg`}></img>
      <img alt="img5" src={`/${params.productId}5.jpg`}></img>
      <h1>Reviews</h1>
      <ul>
        <li>Love it 💕</li>
        <li>Nice</li>
        <li>Nice one</li>
      </ul>
    </div>
  );
};

export default Products;
