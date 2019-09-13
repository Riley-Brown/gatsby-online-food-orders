import React from "react"
import { StyledOption } from "./StyledOption"

export default function Option({ option }) {
  console.log(option)
  return (
    <StyledOption>
      <h1>{option.optionName}</h1>
      {option.optionChoice.map(choice => (
        <div>
          <h4>{choice.choiceName}</h4>
          <span>{choice.choicePrice}</span>
        </div>
      ))}
    </StyledOption>
  )
}
