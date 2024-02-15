export const initialState = {
  cartItems: [],
  user: null,
};

const cartReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.items],
      };
    case "REMOVE_FROM_CART":
      const itemIndex = state.cartItems.findIndex(
        (cartItems) => cartItems.id === action.id
      );
      let newCart = [...state.cartItems];
      // const emptyCart = "Your cart is Empty"
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.warn("cant remove product");
      }
      return {
        ...state,
        cartItems: newCart,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cartItems: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default cartReducer;
