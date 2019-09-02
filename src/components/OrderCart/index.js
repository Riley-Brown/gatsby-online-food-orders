import React from "react"
import { StyledOrderCart } from "./StyledOrderCart"

export default function index({ order }) {
  return (
    <StyledOrderCart>
      <h2 className="order-title">Your Order</h2>
      {order.map(item => (
        <div className="item">
          <div className="item-name">
            <h1>
              {item.quantity} {item.size} {item.name}
            </h1>
            <span>${item.price}</span>
          </div>
          <h4>AddOns:</h4>
          {item.addOns.length > 0 && item.addOns.map(addOn => <h4>{addOn}</h4>)}
        </div>
      ))}
      <h3>Total</h3>
      <span>{order.price}</span>
    </StyledOrderCart>
  )
}
