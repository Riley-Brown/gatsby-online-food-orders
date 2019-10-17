import React, { useEffect, useState, useRef } from "react"
import { StyledConfirmOrder } from "./StyledConfirmOrder"
import { useDispatch, useSelector } from "react-redux"
import { removeFromOrder, showConfirmOrder } from "state/actions"
import deleteIcon from "assets/svg/delete.svg"

export default function ConfirmOrder() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.global.showConfirmOrder)
  const order = useSelector(state => state.global.order)

  const [totalPrice, setTotalPrice] = useState(null)

  const reviewOrderRef = useRef(null)

  useEffect(() => {
    if (reviewOrderRef.current) {
      document.addEventListener("mousedown", handleOutsideClick, false)
    }

    console.log(show)

    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [show])

  const handleOutsideClick = e => {
    if (reviewOrderRef && reviewOrderRef.current.contains(e.target)) {
      return
    }
    dispatch(showConfirmOrder(false))
  }

  return (
    <StyledConfirmOrder>
      <div className="review-order" ref={reviewOrderRef}>
        <div className="header">
          <h4>Review Order</h4>
        </div>
        <div className="body">
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
        </div>
      </div>
    </StyledConfirmOrder>
  )
}
