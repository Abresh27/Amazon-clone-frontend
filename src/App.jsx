import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SharedLayout from "./Pages/SharedLayout";
import CartList from "./Pages/CartList";
import SignIn from "./Pages/SignIn";
import Orders from "./Pages/Orders";
import { useStateValue } from "./Components/Cart/CartContext";
import { auth } from "./Helper/Firebase";
import Payment from "./Pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRout from "./Components/Protected-Rout/ProtectedRout";

const StripePromise = loadStripe(
  "pk_test_51OYXpLGP0DwNR4Xuy4KwyN00kKZMCaNDijnWH3ttfPHxwQe8lKjD381xMU42rXjaZfUowdq9Rj6iqNb0WCWG9TZt00u7in1DJg"
);

function App() {
  const [{}, dispatch] = useStateValue(); //useStateValue - dispatch to push the data to the data layer
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path={"/" || "/home"} element={<Home />} /> */}
        <Route path="/checkout" element={<CartList />} />
        <Route
          path="/orders"
          element={
            <ProtectedRout
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRout>
          }
        />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/payment"
        element={
          <ProtectedRout msg={"you must log in to pay"} redirect={"/payment"}>
            <Elements stripe={StripePromise}>
              <Payment />
            </Elements>
          </ProtectedRout>
        }
      />
    </Routes>
  );
}

export default App;
