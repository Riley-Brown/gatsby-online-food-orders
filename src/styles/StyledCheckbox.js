import styled from "styled-components"

export const StyledCheckbox = styled.label`
  position: relative;
  margin-bottom: 1.5rem;
  display: block;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:hover {
    background: #f6f6f6;
    .check-mark {
      background: #ccc;
    }
  }
  &:focus-within {
    .check-mark {
      outline: rgb(59, 153, 252) auto 5px;
    }
  }
  span:nth-of-type(2) {
    margin-right: 0.7rem;
  }
  span:last-of-type {
    opacity: 0.8;
    font-weight: 500;
  }
  input {
    margin-right: 1.7rem;
    opacity: 0;
    &:checked ~ .check-mark {
      background: var(--secondary);
    }
    &:checked ~ .check-mark:after {
      display: block;
    }
  }
  .check-mark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 25px;
    width: 25px;
    background: #ddd;
    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
