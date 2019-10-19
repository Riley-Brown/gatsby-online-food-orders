import React from "react"
import { useDispatch, useSelector } from "react-redux"

import Img from "gatsby-image"

import { StyledReviewOrder } from "./StyledReviewOrder"

export default function ReviewOrder({ close, next }) {
  const order = useSelector(state => state.global.order)
  const dispatch = useDispatch()

  return (
    <StyledReviewOrder>
      <div className="header">
        <h4>Review Order</h4>
      </div>
      <div className="body">
        <div className="items">
          {order
            .map((item, index) => (
              <div className="item" key={index}>
                <div className="item-info">
                  <div className="item-name">
                    <h1>
                      {item.quantity} {item.size} {item.name}
                    </h1>
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
                  <div className="item-price">
                    <span>Item Price: ${item.price}</span>
                  </div>
                </div>
                <Img fluid={item.itemImgFluid} />
              </div>
            ))
            .reverse()}
        </div>
      </div>
      <div className="footer">
        <button onClick={close}>Cancel</button>
        <button onClick={next}>Next</button>
      </div>
    </StyledReviewOrder>
  )
}
