import React from "react"
import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import rootReducer from "./rootReducer"

let store

if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  console.log("Dev mode detected, enabling redux extension")

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  store = createStore(rootReducer, composeEnhancers())
} else {
  store = createStore(rootReducer)
}

export default ({ element }) => <Provider store={store}>{element}</Provider>
