import styled from "styled-components"

export const StyledAddOns = styled.div`
  h5 {
    color: #333;
    cursor: pointer;
    img {
      width: 20px;
      vertical-align: bottom;
      margin-left: 0.5rem;
    }
  }
  .add-ons {
    margin-top: 1rem;
    overflow: hidden;
    transition: height 300ms;
    label {
      position: relative;
      margin-bottom: 1.5rem;
      display: block;
      width: 100%;
      &:hover {
        .check-mark {
          background: #ccc;
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
        top: 0;
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
    }
  }
`
