import styled from "styled-components"
import { row } from "../../styles/shared"

export const StyledOrderCart = styled.div`
  position: fixed;
  bottom: 0;
  right: 50px;
  overflow: auto;
  max-height: 400px;
  width: 380px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
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
  .order-title {
    background: #222;
    padding: 10px;
    text-align: center;
    color: #fff;
    font-size: 2.2rem;
  }
  .item {
    padding: 10px 20px;
    &:nth-child(odd) {
      background: #ccc;
    }
    .item-name {
      ${row("space-between")};
      h1,
      span {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
`
