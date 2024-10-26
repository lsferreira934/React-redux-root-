import CartActionsTypes from "./actions-types";

export const addProductToCart = (payload) => ({
  type: CartActionsTypes.ADD_PRODUCT,
  payload
})

export const removeProductToCart = (payload) => ({
  type: CartActionsTypes.REMOVE_PRODUCT,
  payload
})

export const increaseProductToCart = (payload) => ({
  type: CartActionsTypes.INCREASE_PRODUCT,
  payload
})

export const decreaseProductToCart = (payload) => ({
  type: CartActionsTypes.DECREASE_PRODUCT,
  payload
})