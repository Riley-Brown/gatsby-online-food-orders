import styled from "styled-components"

export const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  flex: ${props => (props.showCart ? "0 1 75%" : "1 1 100%")};
  transition: 300ms;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 960px) {
    flex: 0 1 100%;
  }
  &::after {
    content: "";
    width: 40%;
    margin: 0 10px 4rem;
    min-width: 370px;
  }
  .category {
    background: #f5f5f5;
    border-radius: 15px;
    width: 40%;
    position: relative;
    background: rgba(0, 0, 0, 0.4);
    min-width: 370px;
    margin: 0 10px 4rem;

    @media (max-width: 800px) {
      width: 80%;
    }
    @media (max-width: 500px) {
      min-width: initial;
      width: 100%;
    }
    &:hover {
      h1 {
        transform: translate(-50%, -65%);
      }
    }
    a {
      text-decoration: none;
      align-items: center;
      .gatsby-image-wrapper {
        width: 100%;
        border-radius: 15px;
        z-index: -1;
      }
      h1 {
        font-size: 3rem;
        color: #333;
        position: absolute;
        color: #fff;
        left: 50%;
        top: 50%;
        font-size: 3.5rem;
        transform: translate(-50%, -50%);
        transition: 200ms;
      }
    }
  }
`
