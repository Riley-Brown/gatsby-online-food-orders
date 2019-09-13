import React, { useEffect, useState, useRef } from "react"
import { StyledOrderCart } from "./StyledOrderCart"
import deleteIcon from "../../assets/svg/delete.svg"
import chevronUp from "../../assets/svg/chevron-up.svg"
import chevronDown from "../../assets/svg/chevron-down.svg"
import emptyCartSvg from "../../assets/svg/empty-cart.svg"

export default function OrderCart({ order, removeFromOrder }) {
  const [totalPrice, setTotalPrice] = useState(null)
  const [showFullCart, setShowFullCart] = useState(true)
  const [cartHeight, setCartHeight] = useState(null)
  const [cartEmpty, setCartEmpty] = useState(true)

  const cartRef = useRef(null)

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
  }, [order])

  // set cart height every order change
  useEffect(() => {
    if (cartRef.current) {
      setCartHeight(cartRef.current.clientHeight)
    }
  }, [order])

  return (
    <StyledOrderCart
      ref={cartRef}
      style={{
        transform: !showFullCart ? `translateY(${cartHeight - 50}px)` : null,
      }}
    >
      <div
        className="order-header"
        onClick={() => !showFullCart && setShowFullCart(true)}
        style={{ cursor: !showFullCart && "pointer" }}
      >
        <h2 className="order-title">Your Order</h2>
      </div>
      {cartEmpty ? (
        <div className="empty-cart">
          <div>
            <h4>Order Empty!</h4>
            <p>Click on any category to start building your order.</p>
          </div>
          <img className="empty-cart" src={emptyCartSvg}></img>
        </div>
      ) : (
        <>
          <div className="items">
            {order.map((item, index) => (
              <div className="item">
                <div className="item-name">
                  <h1>
                    {item.quantity} {item.size} {item.name}
                  </h1>
                  <div className="item-price">
                    <span>${item.price}</span>
                    <img
                      onClick={() => removeFromOrder(index)}
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
              </div>
            ))}
          </div>
          <hr />
          <div className="total">
            <h3>Total</h3>
            <span>${totalPrice}</span>
          </div>
        </>
      )}
    </StyledOrderCart>
  )
}
