import styled from "styled-components"

export const StyledCategory = styled.div`
  flex: 0 0 75%;
  margin-top: 3rem;
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
