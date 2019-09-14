import React, { useState, useEffect, useRef } from "react"

import { StyledOption } from "./StyledOption"
import { StyledCheckbox } from "../../../styles/StyledCheckbox"

export default function Option({
  option,
  showOptions,
  setOptionsPrice,
  itemId,
  setOptions,
}) {
  const [optionHeight, setOptionHeight] = useState(null)
  const [choice, setChoice] = useState({})

  const optionRef = useRef(null)

  useEffect(() => {
    setOptionHeight(optionRef.current.clientHeight)
  }, [optionRef])

  useEffect(() => {
    if (choice.price) {
      setOptionsPrice(Number(choice.price))
    } else {
      setOptionsPrice(0)
    }
  }, [choice])

  useEffect(() => {
    if (choice.price) {
      setOptions([choice])
    } else {
      setOptions([])
    }
  }, [choice])

  const handleOption = e => {
    const { price } = e.target.dataset
    if (e.target.value === "none") {
      setChoice({})
    } else {
      setChoice({
        optionName: option.optionName,
        price,
        choiceName: e.target.value,
      })
    }
  }

  return (
    <StyledOption>
      <div
        className="option"
        style={{
          height:
            optionHeight && showOptions
              ? optionHeight
              : optionHeight
              ? "0"
              : null,
          visibility: !optionHeight && "hidden",
        }}
        ref={optionRef}
      >
        <h5>{option.optionName}</h5>
        <StyledCheckbox>
          <input
            type="radio"
            onChange={handleOption}
            value="none"
            name={`${itemId}-${option.optionName}`}
            defaultChecked
          />
          <span className="check-mark" />
          <span>None</span>
        </StyledCheckbox>
        {option.optionChoice.map(choice => (
          <StyledCheckbox htmlFor={`${itemId}-${choice.choiceName}`}>
            <input
              type="radio"
              name={`${itemId}-${option.optionName}`}
              data-price={choice.choicePrice}
              id={`${itemId}-${choice.choiceName}`}
              value={choice.choiceName}
              onChange={handleOption}
            />
            <span className="check-mark" />
            <span>{choice.choiceName}</span>
            <span>+${choice.choicePrice.toFixed(2)}</span>
          </StyledCheckbox>
        ))}
      </div>
    </StyledOption>
  )
}
