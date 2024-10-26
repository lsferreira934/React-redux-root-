import userActionsTypes from "./actions-types";

export const loginUser = (payload) => ({
  type: userActionsTypes.LOGIN,
  payload: payload
})


export const logoutUser = (payload) => ({
  type: userActionsTypes.LOGOUT,
  payload: payload
})