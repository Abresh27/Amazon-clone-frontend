import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Components/Cart/CartContext.jsx";
import cartReducer, { initialState } from "./Components/Cart/CartReducer.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider initialState={initialState} cartReducer={cartReducer}>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
