import React, { createContext, useContext, useReducer } from "react";

// Create a context or prepare the dataLayer
export const CartContext = createContext();

//Wrap your entire application or the relevant part of it with the CartProvider to make the context available.
export const CartProvider = ({ cartReducer, initialState, children }) => (
  <CartContext.Provider value={useReducer(cartReducer, initialState)}>
    {children}
  </CartContext.Provider>
);

export const useStateValue = () => useContext(CartContext);
