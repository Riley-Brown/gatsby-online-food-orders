import React, { useState, useEffect, useRef } from "react"

import { StyledOption } from "./StyledOption"
import { StyledCheckbox } from "../../../styles/StyledCheckbox"

export default function Option({
  option,
  showOptions,
  itemId,
  setOptions,
  options,
  index,
}) {
  const [optionHeight, setOptionHeight] = useState(null)
  const [choice, setChoice] = useState({})

  const optionRef = useRef(null)

  useEffect(() => {
    setOptionHeight(optionRef.current.clientHeight)
  }, [optionRef])

  useEffect(() => {
    // options without the current index option
    const filteredOptions = options.filter(option => option.index !== index)

    if (choice.price) {
      filteredOptions.push(choice)
      setOptions(filteredOptions)
    } else {
      setOptions(filteredOptions)
    }
  }, [choice])

  const handleOption = e => {
    const { price } = e.target.dataset
    const { value } = e.target

    if (value === "none") {
      setChoice({})
    } else {
      setChoice({
        optionName: option.optionName,
        price,
        choiceName: e.target.value,
        index,
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
            data-price="0"
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
