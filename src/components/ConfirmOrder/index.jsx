import React, { useEffect, useState, useRef } from "react"
import { StyledConfirmOrder } from "./StyledConfirmOrder"
import { useDispatch, useSelector } from "react-redux"
import { removeFromOrder, showConfirmOrder } from "state/actions"

import ReviewOrder from "./ReviewOrder"
import CustomerInfo from "./CustomerInfo"

import { CSSTransition } from "react-transition-group"

export default function ConfirmOrder() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.global.showConfirmOrder)
  const [index, setIndex] = useState(0)
  const modalRef = useRef(null)

  useEffect(() => {
    if (modalRef.current) {
      document.addEventListener("mousedown", handleOutsideClick, false)
    }
    if (show) {
      document.querySelector("body").classList.add("modal-open")
      document.querySelector("html").classList.add("modal-open")
    } else {
      document.querySelector("body").classList.remove("modal-open")
      document.querySelector("html").classList.remove("modal-open")
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [show])

  const handleOutsideClick = e => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return
    }
    dispatch(showConfirmOrder(false))
  }

  const next = () => setIndex(index => ++index)
  const previous = () => setIndex(index => --index)
  const close = () => dispatch(showConfirmOrder(false))

  const multiStepArr = [
    <ReviewOrder close={close} next={next} />,
    <CustomerInfo previous={previous} close={close} />,
  ]

  return (
    <CSSTransition
      unmountOnExit
      in={show}
      timeout={300}
      classNames="confirm-order-modal"
    >
      <StyledConfirmOrder>
        <div ref={modalRef} id="confirm-order-modal">
          {multiStepArr[index]}
        </div>
      </StyledConfirmOrder>
    </CSSTransition>
  )
}
