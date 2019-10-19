import React from "react"
import { StyledCustomerInfo } from "./StyledCustomerInfo"

export default function CustomerInfo({ previous, confirmOrder }) {
  return (
    <StyledCustomerInfo>
      <div className="header">
        <h4>Contact Info</h4>
      </div>
      <div className="body">
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" name="phone" required />
          </div>
          <div>
            <label htmlFor="extra-info">Special Instructions</label>
            <textarea name="extraInfo" id="extra-info" cols="30" rows="5" />
          </div>
        </form>
      </div>

      <div className="footer">
        <button onClick={previous}>Back</button>
        <button onClick={confirmOrder}>Place Order</button>
      </div>
    </StyledCustomerInfo>
  )
}
