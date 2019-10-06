import {
  SET_SHOW_CART,
  SET_ORDER,
  ADD_TO_ORDER,
  REMOVE_FROM_ORDER,
} from "./actions"

const initialState = {
  show: true,
  order: [],
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SHOW_CART:
      return { ...state, show: payload }
    case SET_ORDER:
      return { ...state, order: [...payload] }
    case ADD_TO_ORDER:
      return { ...state, order: [...state.order, payload] }
    case REMOVE_FROM_ORDER:
      const filteredOrders = state.order.filter((_, index) => index !== payload)
      return { ...state, order: filteredOrders }
    default:
      return state
  }
}
