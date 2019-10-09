import styled from "styled-components"

export const StyledCategory = styled.div`
  flex: ${props => (props.showCart ? "0 1 75%" : "1 1 100%")};
  margin-top: 3rem;
  transition: 300ms;
  width: 100%;
  @media (max-width: 960px) {
    flex: 1 1 100%;
  }
  .bread-crumb {
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;
    margin-left: 40px;
    @media (max-width: 800px) {
      text-align: center;
      justify-content: center;
    }
    a,
    h1 {
      font-size: 2rem;
    }
    h1 {
      font-weight: 400;
      color: #666666;
      &::before {
        content: "/";
        padding-right: 1rem;
      }
    }
    a {
      color: hsl(218, 55%, 35%);
      font-weight: 600;
      text-decoration: none;
      margin-right: 10px;
      opacity: 0.9;
      transition: 200ms;
      &:hover {
        opacity: 1;
      }
    }
  }
  .category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &::after {
      content: "";
      width: 40%;
      min-width: 370px;
    }
  }
`
