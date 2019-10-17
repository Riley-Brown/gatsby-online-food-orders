import React, { useEffect, useState, useRef } from "react"

import { StyledOrderCart } from "./StyledOrderCart"
import deleteIcon from "assets/svg/delete.svg"
import chevronUp from "assets/svg/chevron-up.svg"
import chevronDown from "assets/svg/chevron-down.svg"
import emptyCartSvg from "assets/svg/empty-cart.svg"
import shoppingBagSvg from "assets/svg/cart.svg"

import { useSelector, useDispatch } from "react-redux"

import {
  setOrder,
  setShowCart,
  removeFromOrder,
  showConfirmOrder,
} from "state/actions"

import ReactDOMServer from "react-dom/server"

import axios from "axios"

export default function OrderCart() {
  const [totalPrice, setTotalPrice] = useState(null)
  const [cartEmpty, setCartEmpty] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const cartRef = useRef(null)

  const dispatch = useDispatch()
  const show = useSelector(state => state.global.show)
  const order = useSelector(state => state.global.order)

  useEffect(() => {
    if (order.length === 0) {
      // set initial order from local storage
      const localStorageOrder = JSON.parse(localStorage.getItem("order"))
      if (localStorageOrder && localStorageOrder.length > 0) {
        console.log(localStorageOrder, localStorageOrder.length)
        dispatch(setOrder(localStorageOrder))
      }
    }
    mq.addListener(handleToggleCart)
  }, [])

  const mq =
    typeof window !== "undefined" && window.matchMedia("(max-width: 960px)")

  const handleToggleCart = () => {
    if (mq.matches) {
      dispatch(setShowCart(false))
    } else {
      dispatch(setShowCart(true))
    }
  }

  // calculate total price every order change
  useEffect(() => {
    if (order.length > 0) {
      const total = order.reduce((a, b) => ({
        price: Number(a.price) + Number(b.price),
      }))
      setTotalPrice(Number(total.price).toFixed(2))
      setCartEmpty(false)
    } else {
      setTotalPrice(0)
      setCartEmpty(true)
    }
    // update local storage every order change
    localStorage.setItem("order", JSON.stringify(order))
  }, [order])

  const toHtml = async element => {
    const orderHTML = order.map(item => (
      <div>
        <h4> {item.name}</h4>
        <p>{item.size}</p>
        <p>{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        AddOns: lmao
        <a href="https://google.com?confirm=true">
          <button>Confirm Order</button>
        </a>
      </div>
    ))

    return ReactDOMServer.renderToString(orderHTML)
  }

  const send = async () => {
    const html = await toHtml()
    const data = {
      user_email: "riley@riley.gg",
      html,
    }

    try {
      const test = await axios.post(
        "/.netlify/functions/confirmOrder",
        JSON.stringify(data)
      )
      console.log(test)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledOrderCart ref={cartRef} showCart={show} loaded={loaded}>
      <div className="cart-wrapper">
        <div className="order-header">
          <button onClick={() => dispatch(setShowCart(!show))}>
            <h2 className="order-title">Your Order</h2>
            <img src={show ? chevronDown : chevronUp} alt="toggle cart" />
          </button>
        </div>
        {cartEmpty ? (
          <div className="empty-cart">
            <div>
              <h4>Order Empty!</h4>
              <p>Click on any category to start building your order.</p>
            </div>
            <img src={emptyCartSvg}></img>
          </div>
        ) : (
          <>
            <div className="items">
              {order
                .map((item, index) => (
                  <div className="item" key={index}>
                    <div className="item-name">
                      <h1>
                        {item.quantity} {item.size} {item.name}
                      </h1>
                      <div className="item-price">
                        <span>${item.price}</span>
                        <button>
                          <img
                            onClick={() => dispatch(removeFromOrder(index))}
                            src={deleteIcon}
                            alt="Delete Item"
                          />
                        </button>
                      </div>
                    </div>
                    {/* Add Ons */}
                    {item.addOns.length > 0 && (
                      <div className="add-ons">
                        <ul>
                          <h4>Add Ons</h4>
                          {item.addOns.map(addOn => (
                            <li>{addOn}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Options */}
                    {item.options.length > 0 && (
                      <div className="add-ons">
                        <ul>
                          <h4>Options</h4>
                          {item.options.map(option => (
                            <li>
                              {option.optionName}:{" "}
                              <span>{option.choiceName}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
                .reverse()}
            </div>
            <div className="total">
              <div>
                <h3 onClick={() => send()}>Total:</h3>
                <span>${totalPrice}</span>
              </div>
              <button onClick={() => dispatch(showConfirmOrder(true))}>
                <span>Checkout</span>
                <img src={shoppingBagSvg} alt="" />
              </button>
            </div>
          </>
        )}
      </div>
    </StyledOrderCart>
  )
}
