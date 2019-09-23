const initialState = {
  show: false,
}

const TOGGLE_SHOW = "TOGGLE_SHOW"

export const toggleShow = bool => ({
  type: TOGGLE_SHOW,
  payload: bool,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW:
      return { ...state, show: action.payload }
    default:
      return state
  }
}
