export const SET_SHOW_CART = "SET_SHOW_CART"
export const setShowCart = payload => dispatch =>
  dispatch({
    type: SET_SHOW_CART,
    payload,
  })

export const SET_ORDER = "SET_ORDER"
export const setOrder = payload => dispatch =>
  dispatch({
    type: SET_ORDER,
    payload,
  })

export const ADD_TO_ORDER = "ADD_TO_ORDER"
export const addToOrder = payload => dispatch =>
  dispatch({
    type: ADD_TO_ORDER,
    payload,
  })

export const REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER"
export const removeFromOrder = payload => dispatch =>
  dispatch({
    type: REMOVE_FROM_ORDER,
    payload,
  })
