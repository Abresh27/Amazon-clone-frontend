import React from "react";
import "./cartItems.css";
import { useStateValue } from "../Cart/CartContext";

export default function CartItems({
  id,
  description,
  price,
  rating,
  imgsrc,
  hideButton,
}) {
  const [{ cartItems }, dispatch] = useStateValue();
  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };
  return (
    <div className="cartItems-container row">
      <div className="cart-img col-md-4">
        <img src={imgsrc} alt="cart-image" />
      </div>
      <div className="cart-items-info col-md-8">
        <p className="item-description">{description}</p>
        <div className="item-price">
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
        {!hideButton && (
          <div className="remove-cart">
            <button onClick={handleRemoveFromCart}>Remove From Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}
