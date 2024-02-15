import React from "react";
import numeral from "numeral";
import "./subtotal.css";
import { useStateValue } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";

const CurrencyFormat = (amount) => {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return formattedAmount;
};
const priceAdder = (items) => {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice = items[i].price + totalPrice;
  }
  return totalPrice;
};

function Subtotal() {
  const [{ cartItems }, dispatch] = useStateValue(); //useStateValue - cartItems to pull the data to the data layer
  // console.log(cartItems.length);

  //
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div className="subtotal-container">
      <div>
        <div className="subtotal-counter">
          Subtotal ({cartItems.length} items):
          <strong>{CurrencyFormat(priceAdder(cartItems))}</strong>
        </div>
        <div className="gift-checkbox">
          <input type="checkbox" />
          This oreder contains a gift
        </div>
      </div>
      <button onClick={handleClick}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
