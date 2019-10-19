import React, { useEffect, useState, useRef } from "react"
import { StyledConfirmOrder } from "./StyledConfirmOrder"
import { useDispatch, useSelector } from "react-redux"
import { removeFromOrder, showConfirmOrder } from "state/actions"

import ReviewOrder from "./ReviewOrder"
import CustomerInfo from "./CustomerInfo"

export default function ConfirmOrder() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.global.showConfirmOrder)
  const order = useSelector(state => state.global.order)

  const [totalPrice, setTotalPrice] = useState(null)
  const [index, setIndex] = useState(0)

  const modalRef = useRef(null)

  useEffect(() => {
    if (modalRef.current) {
      document.addEventListener("mousedown", handleOutsideClick, false)
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [show])

  useEffect(() => {
    document.querySelector("body").classList.add("modal-open")
    return () => document.querySelector("body").classList.remove("modal-open")
  }, [])

  const handleOutsideClick = e => {
    if (modalRef && modalRef.current.contains(e.target)) {
      return
    }
    dispatch(showConfirmOrder(false))
  }

  const next = () => setIndex(index => ++index)
  const previous = () => setIndex(index => --index)
  const close = () => dispatch(showConfirmOrder(false))

  const multiStepArr = [
    <ReviewOrder close={close} next={next} />,
    <CustomerInfo previous={previous} />,
  ]

  return (
    <StyledConfirmOrder>
      <div ref={modalRef} id="confirm-order-modal">
        {multiStepArr[index]}
      </div>
    </StyledConfirmOrder>
  )
}
