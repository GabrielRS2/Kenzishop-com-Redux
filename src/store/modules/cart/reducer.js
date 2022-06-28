import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_CART:
  
    return action.cart;
  case REMOVE_CART:

    return action.cart;
  default:
    return state;
  }
};

export default cartReducer;