import {
  SET_SHOW_CART,
  SET_ORDER,
  ADD_TO_ORDER,
  REMOVE_FROM_ORDER,
  SHOW_CONFIRM_ORDER,
  SET_GLOBAL_TOTAL_PRICE,
} from "./actions"

const initialState = {
  show: false,
  order: [],
  showConfirmOrder: false,
  totalPrice: null,
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
    case SHOW_CONFIRM_ORDER:
      return { ...state, showConfirmOrder: payload }
    case SET_GLOBAL_TOTAL_PRICE:
      return { ...state, totalPrice: payload }
    default:
      return state
  }
}
