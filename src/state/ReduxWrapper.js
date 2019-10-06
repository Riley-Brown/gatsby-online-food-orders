import React from "react"
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
import thunk from "redux-thunk"
import logger from "redux-logger"

let store

if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  console.log("Dev mode detected, enabling redux extension")

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  )
} else {
  store = createStore(rootReducer, applyMiddleware(thunk))
}

export default ({ element }) => <Provider store={store}>{element}</Provider>
