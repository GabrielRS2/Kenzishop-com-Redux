import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addCartItem = (cart) => ({
  type: ADD_CART,
  cart,
})


export const removeCartItem = (cart) => ({
  type: REMOVE_CART,
  cart,
})