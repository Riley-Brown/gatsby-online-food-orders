import styled from "styled-components"
import { row } from "../../styles/shared"

export const StyledOrderCart = styled.div`
  width: ${props => (props.showCart ? "500px" : 0)};
  /* transition: 200ms; */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 960px) {
    width: ${props => (props.showCart ? "100%" : "0")};
    position: ${props => (props.showCart ? "fixed" : "static")};
    background: ${props => (props.showCart ? "rgba(0, 0, 0, 0.5)" : "none")};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${props => (props.showCart ? 22 : 0)};
    /* transform: ${props =>
      props.showCart ? "transform(0, 0)" : "transform()"} */
  }
  .cart-wrapper {
    position: fixed;
    right: 50px;
    width: 380px;
    height: 400px;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 10px;
    transition: 200ms;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
    transform: ${props =>
      props.showCart ? "translateY(-50%)" : "translateY(calc(350px))"};
    bottom: ${props => (props.showCart ? "initial" : 0)};
    top: ${props => (props.showCart ? "50%" : "initial")};
    @media (max-width: 960px) {
      /* right: initial;
      left: 50%;
      transform: translate(-50%, -50%);
      bottom: 0; */
      left: 50%;
      transform: ${props =>
        props.showCart ? "translate(-50%, -50%)" : "translate(-50%, 350px)"};
        width: 450px;
    }
    /* transform: translate(-50%, -50%); */
  }

  .empty-cart {
    animation: 500ms fadeIn;
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
    animation: 500ms fadeIn;
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
    position: relative;
    cursor: pointer;
    img {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
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
    animation: 500ms fadeIn;
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
