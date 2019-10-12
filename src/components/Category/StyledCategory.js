import styled from "styled-components"

export const StyledCategory = styled.div`
  flex: ${props => (props.showCart ? "0 1 75%" : "1 1 100%")};
  margin-top: 3rem;
  transition: 300ms;
  width: 100%;
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
  @media (max-width: 960px) {
    flex: 1 1 100%;
  }
  .bread-crumb {
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;
    margin-left: 5%;
    @media (max-width: 800px) {
      text-align: center;
      justify-content: center;
      margin-left: 0px;
      position: sticky;
      z-index: 2;
      background: #f9f9f9;
      top: 0px;
      padding: 20px 0;
      margin-bottom: 1.45rem;
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
