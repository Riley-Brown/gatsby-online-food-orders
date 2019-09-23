import React from "react"
import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import rootReducer from "."

let store

if (process.env.NODE_ENV === "development") {
  console.log("Dev mode detected, enabling redux extension")

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  store = createStore(rootReducer, composeEnhancers())
} else {
  store = createStore(rootReducer)
}

// const createStore = () => reduxCreateStore(rootReducer)

export default ({ element }) => <Provider store={store}>{element}</Provider>
