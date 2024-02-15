import React, { useEffect, useState } from "react";
import { db } from "../Helper/Firebase";
import { useStateValue } from "../Components/Cart/CartContext";
import "./orders.css";
// import ProductCard from "../Components/Product-card/ProductCard";
import CartItems from "../Components/Cart-Items/CartItems";

export default function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="order_container">
      <div className="orders">
        <h2>Your Orders</h2>
        {orders?.length == 0 && (
          <div style={{ paddding: "20px" }}>You don't have any order</div>
        )}
        <div>
          {orders?.map((eachOrder, i) => {
            return (
              <div key={i}>
                {/* <hr /> */}
                <div className="order-id">
                  <span className="order-id-title"> Order ID: </span>
                  <span className="order-id-no">{eachOrder?.id}</span>
                </div>
                <div className="each-order">
                  {eachOrder?.data?.basket?.map((order) => (
                    <CartItems
                      key={order.id}
                      id={order.id}
                      description={order.description}
                      price={order.price}
                      rating={order.rating}
                      imgsrc={order.imgsrc}
                      hideButton
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
