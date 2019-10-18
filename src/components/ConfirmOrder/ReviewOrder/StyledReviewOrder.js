import styled from "styled-components"

const paddingContainer = "25px"

export const StyledReviewOrder = styled.div`
  .header {
    background: var(--secondary);
    padding: ${paddingContainer};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    h4 {
      text-align: center;
      font-size: 2.5rem;
      color: #fff;
    }
  }
  .body {
    background: #fff;
    .items {
      overflow-y: auto;
      max-height: 450px;
      padding: ${paddingContainer};
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        .item-info {
          flex: 0 0 50%;
          .item-name {
            h1 {
              font-size: 2rem;
            }
          }
        }
        .gatsby-image-wrapper {
          flex: 0 0 40%;
          border-radius: 20px;
        }
        .item-price {
          span {
            font-size: 2rem;
          }
        }
      }
    }
  }
  .footer {
    background: #fff;
    padding: ${paddingContainer};
    border-top: 1px solid #ccc;
    text-align: center;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    button {
      padding: 10px;
      font-size: 2rem;
    }
  }
`
