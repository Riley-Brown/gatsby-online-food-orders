import React, { useEffect, useState } from "react"
import { StyledOrderCart } from "./StyledOrderCart"

export default function OrderCart({ order }) {
  const [totalPrice, setTotalPrice] = useState(null)

  useEffect(() => {
    if (order.length > 0) {
      const total = order.reduce((a, b) => ({
        price: Number(a.price) + Number(b.price),
      }))

      setTotalPrice(total.price)
    }
  }, [order])

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
      <hr />
      <div className="total">
        <h3>Total</h3>
        <span>${totalPrice}</span>
      </div>
    </StyledOrderCart>
  )
}
