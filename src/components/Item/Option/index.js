import React, { useState, useEffect, useRef } from "react"

import { StyledOption } from "./StyledOption"
import { StyledCheckbox } from "../../../styles/StyledCheckbox"

export default function Option({ option, showOptions }) {
  // const [show, setShow] = useState(false)
  const [optionHeight, setOptionHeight] = useState(null)
  const [choice, setChoice] = useState([])

  const optionRef = useRef(null)

  useEffect(() => {
    setOptionHeight(optionRef.current.clientHeight)
  }, [optionRef])

  const handleOption = e => {
    console.log("lol")
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
        {option.optionChoice.map(choice => (
          <StyledCheckbox htmlFor={`${option.optionName}-${choice.choiceName}`}>
            <input
              type="radio"
              name={`${option.optionName}`}
              data-price={choice.choicePrice}
              id={`${option.optionName}-${choice.choiceName}`}
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
