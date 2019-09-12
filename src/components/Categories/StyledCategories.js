import styled from "styled-components"

export const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .category {
    background: #f5f5f5;
    margin-bottom: 4rem;
    border-radius: 15px;
    width: 20%;
    position: relative;
    background: rgba(0, 0, 0, 0.4);
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
