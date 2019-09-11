import styled from "styled-components"

export const StyledItem = styled.div`
  flex: 0 0 45%;
  .gatsby-image-wrapper {
    border-radius: 15px;
    max-height: 400px;
  }
  h1,
  h5 {
    color: #333;
  }
  .item-title {
    display: flex;
    justify-content: space-between;
    font-size: 2.2rem;
    margin-top: 1.5rem;
    h1,
    h5 {
      font-size: inherit;
      color: #333;
    }
    div {
      display: flex;
      select {
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 4px;
        margin-right: 1rem;
      }
    }
  }
  .quantity {
    margin-top: 0.2rem;
    button {
      border-radius: 4px;
      border: none;
      background: var(--secondary);
      color: #fff;
      padding: 2px 10px;
      cursor: pointer;
    }
    span {
      margin: 0 10px;
    }
  }
  .item-description {
    margin: 1rem 0;
    opacity: 0.85;
    font-size: 1.8rem;
  }
  .add-ons-container {
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
  }
  .add-to-order {
    background: var(--secondary);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 1.8rem;
    text-align: center;
    display: block;
    margin: 2rem auto;
  }
`
