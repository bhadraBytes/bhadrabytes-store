import "./Product.scss";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <div className="star-ratings">
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
        </div>
        <span className="price">
          ₹{data.price} <MdShoppingCart className="cart-icon" />
        </span>
      </div>
    </div>
  );
};

export default Product;
