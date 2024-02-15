import React from "react";
import CartItems from "../Cart-Items/CartItems";
import { useStateValue } from "../Cart/CartContext";
// import "./ProductCard.css";

export default function ProductCard() {
  const [{ cartItems }, dispatch] = useStateValue();
  return (
    <>
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
    </>
  );
}
