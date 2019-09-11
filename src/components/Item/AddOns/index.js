import React, { useEffect, useState, useRef } from "react"

import plusSvg from "../../../assets/svg/plus.svg"
import minusSvg from "../../../assets/svg/minus.svg"

import { StyledAddOns } from "./StyledAddOns"

export default function AddOns({ item, setAddOnsPrice }) {
  const [showAddOns, setShowAddOns] = useState(false)
  const [addOnsHeight, setAddOnsHeight] = useState(null)

  const [addOns, setAddOns] = useState([])

  const addOnsRef = useRef(null)

  useEffect(() => {
    setAddOnsHeight(addOnsRef.current.clientHeight)
  }, [addOnsRef])

  const handleAddOns = e => {
    const { price } = e.target.dataset
    const addOn = e.target.value
    if (e.target.checked) {
      setAddOnsPrice(prevPrice =>
        prevPrice !== null ? prevPrice + Number(price) : Number(price)
      )
      setAddOns(addOns => [...addOns, addOn])
    } else if (!e.target.checked) {
      setAddOnsPrice(prevPrice =>
        prevPrice !== null ? Number(prevPrice) - Number(price) : Number(price)
      )
      const filteredAddOns = addOns.filter(addOn => addOn !== e.target.value)
      setAddOns(filteredAddOns)
    }
  }

  return (
    <StyledAddOns>
      <h5 onClick={() => setShowAddOns(show => !show)}>
        Add Ons
        <img src={showAddOns ? minusSvg : plusSvg} alt="" />
      </h5>
      <div
        className="add-ons"
        style={{
          height:
            addOnsHeight && showAddOns
              ? addOnsHeight
              : addOnsHeight
              ? "0"
              : null,
          visibility: !addOnsHeight && "hidden",
        }}
        ref={addOnsRef}
      >
        {item.itemAddOns.map(addOn => (
          <label htmlFor={`${item.itemName}-${addOn.addOnName}`}>
            <input
              type="checkbox"
              name={addOn.addOnName}
              data-price={addOn.addOnPrice}
              id={`${item.itemName}-${addOn.addOnName}`}
              value={addOn.addOnName}
              onChange={handleAddOns}
            />
            <span className="check-mark" />
            <span>{addOn.addOnName}</span>
            <span>+${addOn.addOnPrice.toFixed(2)}</span>
          </label>
        ))}
      </div>
    </StyledAddOns>
  )
}
