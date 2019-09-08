import styled from "styled-components"

export const StyledCategories = styled.div`
  .category {
    background: #f5f5f5;
    margin-bottom: 4rem;
    border-radius: 15px;
    a {
      text-decoration: none;
      align-items: center;
      display: flex;
      .gatsby-image-wrapper {
        flex: 0 0 20%;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }
      h1 {
        font-size: 3rem;
        color: #333;
        margin-left: 2rem;
      }
    }
  }
`
