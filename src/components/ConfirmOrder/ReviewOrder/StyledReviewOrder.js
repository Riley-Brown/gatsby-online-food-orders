import styled from "styled-components"

const paddingContainer = "25px"
const paddingContainerMobile = "13px"

export const StyledReviewOrder = styled.div`
  .header {
    background: var(--secondary);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-align: center;
    position: relative;
  }
  .body {
    .items {
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding: ${paddingContainer};
        @media (max-width: 650px) {
          flex-direction: column;
        }
        @media (max-width: 500px) {
          padding: ${paddingContainerMobile};
        }
        &:nth-child(even) {
          background: #e6e6e6;
        }
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
          @media (max-width: 650px) {
            width: 70%;
            flex: 1 1 auto;
          }
        }
        .item-price {
          margin: 1rem 0;
          font-weight: 500;
          span {
            margin: 1rem 0;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
        .add-ons {
          margin: 0.5rem 0;
          ul {
            margin: 0;
            list-style: none;
            h4 {
              font-weight: 500;
            }
            li {
              &::before {
                content: "-";
                margin: 0 5px;
              }
            }
          }
          h4 {
            font-size: 1.6rem;
            font-weight: normal;
          }
        }
      }
    }
  }
  .footer {
    .total {
      @media (max-width: 500px) {
        margin-top: 1rem;
      }
      h3 {
        font-size: 2rem;
        font-weight: 500;
        span {
          margin-left: 5px;
          font-size: 2rem;
          font-weight: 500;
        }
      }
    }
    div:last-of-type {
      display: flex;
      @media (max-width: 500px) {
        margin-top: 1rem;
      }
    }
  }
`
