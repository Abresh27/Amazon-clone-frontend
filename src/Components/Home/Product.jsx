import React from "react";
import { useStateValue } from "../Cart/CartContext";

function Product({
  id,
  title,
  description,
  price,
  rating,
  imgsrc,
  imgwidth,
  imgheight,
  hidedescription,
}) {
  const [{ cartItems }, dispatch] = useStateValue();
  // console.log("basket", cartItems);
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      items: {
        id: id,
        title: title,
        description: description,
        imgsrc: imgsrc,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="single-product-container">
      <div className="product-detail">
        <div className="product-title">{title}</div>
        {!hidedescription && (
          <p className="product-description">{description}</p>
        )}
      </div>
      <div className="product-img">
        <img
          src={imgsrc}
          width={imgwidth}
          height={imgheight}
          alt="product image"
        />
      </div>
      <div>
        <div className="product-price">
          <small>
            <sup>$</sup>
          </small>
          {price}
        </div>
        <div className="rating-icon">
          {Array(rating)
            .fill()
            .map(() => (
              <div>⭐️</div>
            ))}
        </div>
      </div>
      <div className="add-cart">
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
