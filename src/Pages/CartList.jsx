import React from "react";
import Subtotal from "../Components/Subtotal/Subtotal";
import ProductCard from "../Components/Product-card/ProductCard";
import "./cart-list.css";

function CartList() {
  return (
    <div className="cart-list-container ">
      <div className="left-side-container ">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello,</h3>
        <h2 className="cart-title">Your shopping basket</h2>
        <ProductCard />
      </div>
      <div className="right-side-container ">
        <Subtotal />
      </div>
    </div>
  );
}
export default CartList;
