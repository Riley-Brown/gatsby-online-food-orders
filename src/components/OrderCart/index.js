import React, { useEffect, useState, useRef } from "react"
import { StyledOrderCart } from "./StyledOrderCart"
import deleteIcon from "assets/svg/delete.svg"
import chevronUp from "assets/svg/chevron-up.svg"
import chevronDown from "assets/svg/chevron-down.svg"
import emptyCartSvg from "assets/svg/empty-cart.svg"

import { useSelector, useDispatch } from "react-redux"

import { setOrder, setShowCart, removeFromOrder } from "state/actions"

export default function OrderCart() {
  const [totalPrice, setTotalPrice] = useState(null)
  const [cartEmpty, setCartEmpty] = useState(false)

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
  }, [])

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

  return (
    <StyledOrderCart ref={cartRef} showCart={show}>
      <div
        className="cart-wrapper"
        style={{
          transform: show ? "translateY(-50%)" : "translateY(calc(350px))",
          bottom: show ? "initial" : 0,
          top: show ? "50%" : "initial",
        }}
      >
        <div
          className="order-header"
          onClick={() => dispatch(setShowCart(!show))}
        >
          <h2 className="order-title">Your Order</h2>
          <img src={show ? chevronDown : chevronUp} alt="toggle cart" />
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
                        <img
                          onClick={() => dispatch(removeFromOrder(index))}
                          src={deleteIcon}
                          alt="Delete Item"
                        />
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
            <hr />
            <div className="total">
              <h3>Total</h3>
              <span>${totalPrice}</span>
            </div>
          </>
        )}
      </div>
    </StyledOrderCart>
  )
}
