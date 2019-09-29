import { SET_SHOW_CART } from "./actions"

const initialState = {
  show: true,
  order: [],
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SHOW_CART:
      return { ...state, show: payload }
    default:
      return state
  }
}
