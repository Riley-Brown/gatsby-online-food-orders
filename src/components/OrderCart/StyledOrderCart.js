import styled from "styled-components"
import { row } from "../../styles/shared"

export const StyledOrderCart = styled.div`
  position: fixed;
  right: 50px;
  width: 380px;
  height: 400px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 10px;
  transition: 200ms;
  opacity: ${props => (props.loaded ? 1 : 0)};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
  .empty-cart {
    div {
      h4 {
        font-size: 2rem;
        color: var(--secondary);
      }
      p {
        opacity: 0.9;
      }
      position: absolute;
      top: 85px;
      left: 25px;
      width: 40%;
    }
    img {
      width: 100%;
      border-radius: 10px;
      margin: auto;
      display: block;
      position: absolute;
      bottom: 0px;
    }
  }
  .items {
    overflow-y: auto;
    max-height: 300px;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #fff;
    }
    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #ccc;
    }
  }
  .order-header {
    background: var(--secondary);
    padding: 10px;
    text-align: center;
    color: #fff;
    top: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    h2 {
      font-size: 2.2rem;
    }
    .toggle {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  .item {
    padding: 10px 20px;
    &:nth-child(even) {
      background: #e6e6e6;
    }
    .item-name {
      ${row("space-between")};
      h1,
      span {
        font-size: 2rem;
        font-weight: 500;
      }
      img {
        width: 27px;
        height: 27px;
        margin-left: 7px;
      }
      .item-price {
        display: flex;
        img {
          cursor: pointer;
        }
      }
    }
    .add-ons {
      ul {
        margin: 0;
        list-style: none;
        h4 {
          font-weight: 500;
        }
        li {
          &::before {
            content: "-";
            margin: 0 5px;
          }
        }
      }
      h4 {
        font-size: 1.6rem;
        font-weight: normal;
      }
    }
  }
  .total {
    ${row("space-between", "center")};
    padding: 10px 20px;
    h3 {
      font-size: 2rem;
      margin: 0;
    }
    span {
      font-size: 2rem;
      font-weight: 700;
    }
  }
`
