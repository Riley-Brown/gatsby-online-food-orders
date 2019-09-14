import styled from "styled-components"

export const StyledAddOns = styled.div`
  h5 {
    color: #333;
    cursor: pointer;
    span {
      font-size: 1.8rem;
      width: 73px;
    }
    img {
      width: 23px;
      vertical-align: bottom;
      margin-left: 0.5rem;
    }
  }
  .add-ons-container {
    overflow: hidden;
    transition: height 300ms;
    margin-top: 1rem;
    .add-ons {
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 1rem;
      background: #fff;
    }
  }
`
