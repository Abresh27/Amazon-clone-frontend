import React, { useEffect, useState } from "react";
import "./payment.css";
import { useStateValue } from "../Components/Cart/CartContext";
import { Link } from "react-router-dom";
import CartItems from "../Components/Cart-Items/CartItems";
import numeral from "numeral";
import { axiosInstance } from "../Api/Axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";
import { db } from "../Helper/Firebase";
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

export default function Payment() {
  const [{ cartItems, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  // Steps to handle the payment process
  // Step 1. Contact the backend(Stripe Function) to get the client secret
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${priceAdder(cartItems) * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data.clientSecret;

      // Step 2. Client side (react side confirmation)
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(paymentIntent);

      // 3. Save the order in the firestorm database and clear the cart items
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: cartItems,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // After the payment process the cart should be empty
      dispatch({ type: "EMPTY_CART" });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <>
      <div className="payment-nav">
        <div className="amazon-logo2">
          <Link to="/home">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
              className="d-inline-block align-top"
              alt="Netflix logo"
            />
          </Link>
        </div>
        <Link to="/checkout">
          <div className="item-counter">
            Checkout (<span>{cartItems.length} items</span>)
          </div>
        </Link>
        <button>
          <img
            src="https://m.media-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png"
            alt=""
          />
        </button>
      </div>
      <div className="address-info">
        <h4 className="section-title">Delivery Address</h4>
        <div className="section-content">
          African Avanu St. <br />
          Addis Ababa, Ethiopia
        </div>
      </div>
      <div className="listed-items">
        <h4 className="section-title">Review items and delivery</h4>
        <div className="section-content">
          {cartItems.map((items) => {
            return (
              <CartItems
                id={items.id}
                description={items.description}
                imgsrc={items.imgsrc}
                price={items.price}
                rating={items.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="payment-method">
        <h4 className="section-title">Payment Method</h4>
        <div className="section-content">
          <div className="payment-detail">
            <form onSubmit={handlePayment}>
              {error && <small style={{ color: "red" }}>{error}</small>}
              <CardElement onChange={handleChange} />
              <strong>
                Order Total: {CurrencyFormat(priceAdder(cartItems))}
              </strong>
              <div>
                <button className="buy-now-btn" type="submit">
                  {processing ? (
                    <div>
                      <ClipLoader
                        color="gray"
                        size={12}
                        // vertical-align="auto"
                      />
                      <p>Please Wait ...</p>
                    </div>
                  ) : (
                    "Buy Now"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
