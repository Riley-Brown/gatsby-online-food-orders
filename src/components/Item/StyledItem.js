import styled from "styled-components"

export const StyledItem = styled.div`
  flex: 0 1 40%;
  margin-bottom: 6rem;
  min-width: 380px;
  @media (max-width: 800px) {
    flex: 0 1 90%;
    min-width: initial;
  }
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
    cursor: pointer;
  }
`
