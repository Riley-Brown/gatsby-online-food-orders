import styled from "styled-components"

export const StyledCategory = styled.div`
  flex: ${props => (props.showCart ? "0 1 75%" : "1 1 100%")};
  margin-top: 3rem;
  transition: 300ms;
  .category-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &::after {
      content: "";
      width: 40%;
    }
  }
`
