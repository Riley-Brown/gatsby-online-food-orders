import React, { useState } from "react"
import { StyledCustomerInfo } from "./StyledCustomerInfo"

import ReactDOMServer from "react-dom/server"
import axios from "axios"

import { useSelector, useDispatch } from "react-redux"

import spinnerSvg from "assets/svg/spinner.svg"

import swal from "@sweetalert/with-react"

import { renderEmail } from "react-html-email"
import useEmailTemplate from "./EmailTemplate"

export default function CustomerInfo({ previous, close }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()
    console.log(e)
    send()
  }

  const order = useSelector(state => state.global.order)
  const [emailTemplate] = useEmailTemplate(order)

  const orderHTML = renderEmail(emailTemplate)

  const send = async () => {
    const html = orderHTML
    const data = {
      user_email: "riley@riley.gg",
      user_name: inputs.name,
      user_phone: inputs.phone,
      user_message: inputs.message,
      html,
    }

    try {
      const test = await axios.post(
        "/.netlify/functions/confirmOrder",
        JSON.stringify(data)
      )

      console.log(test)
      if (test) {
        setSuccess(true)
        setLoading(false)
        close()
        swal(
          "Order Placed",
          "You will receive a confirmation email when your order is accepted!",
          "success"
        )
      }
    } catch (err) {
      console.log(err)
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
