import React, { useState } from "react"
import { StyledCustomerInfo } from "./StyledCustomerInfo"

import ReactDOMServer from "react-dom/server"
import axios from "axios"

import { useSelector, useDispatch } from "react-redux"

import spinnerSvg from "assets/svg/spinner.svg"

import swal from "@sweetalert/with-react"

import { renderEmail } from "react-html-email"
import useEmailTemplate from "./EmailTemplate"

import { setOrder } from "state/actions"

export default function CustomerInfo({ previous, close }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const dispatch = useDispatch()

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const orderId = Date.now()

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()
    console.log(e)
    send()
  }

  const order = useSelector(state => state.global.order)
  const orderTotal = useSelector(state => state.global.totalPrice)

  const [merchantEmailTemplate] = useEmailTemplate({
    order,
    orderTotal,
    name: inputs.name,
    email: inputs.email,
    phone: inputs.phone,
    message: inputs.message,
    orderId,
    emailType: "merchant",
  })

  const [customerOrderEmailTemplate] = useEmailTemplate({
    order,
    orderTotal,
  })

  const [confirmedOrderEmailTemplate] = useEmailTemplate({
    order,
    orderTotal,
    emailType: "confirmedOrder",
  })

  const merchantHTML = renderEmail(merchantEmailTemplate)
  const customerHTML = renderEmail(customerOrderEmailTemplate)
  const confirmOrderHTML = renderEmail(confirmedOrderEmailTemplate)

  const send = async () => {
    const data = {
      user_email: inputs.email,
      user_name: inputs.name,
      user_phone: inputs.phone,
      user_message: inputs.message,
      order_id: orderId,
      merchant_html: merchantHTML,
      customer_html: customerHTML,
      confirmed_order_html: confirmOrderHTML,
    }

    try {
      const test = await axios.post(
        "/.netlify/functions/confirmOrder",
        JSON.stringify(data)
      )

      if (test.status === 200) {
        setSuccess(true)
        setLoading(false)
        dispatch(setOrder([]))
        close()
        swal(
          "Order Placed",
          "You will receive a confirmation email when your order is accepted!",
          "success"
        )
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
      swal(
        "Something went wrong",
        "We're sorry, there was an error placing your order. Please try again.",
        "danger"
      )
    }
  }

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value })

  return (
    <StyledCustomerInfo>
      <div className="header">
        <h2>Contact Info</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <main className="body">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              required
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="extra-info">Special Instructions</label>
            <textarea
              name="message"
              id="extra-info"
              cols="30"
              rows="5"
              onChange={onChange}
            />
          </div>
        </main>
        <footer className="footer">
          <button type="button" onClick={previous}>
            Back
          </button>
          <button type="submit">
            {loading ? (
              <img src={spinnerSvg} alt="Placing Order..." />
            ) : (
              "Place Order"
            )}
          </button>
        </footer>
      </form>
    </StyledCustomerInfo>
  )
}
