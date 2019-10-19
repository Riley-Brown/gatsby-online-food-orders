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
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding: ${paddingContainer};
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
    background: #fff;
    padding: ${paddingContainer};
    border-top: 1px solid #ccc;
    text-align: center;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .total {
      h3 {
        font-size: 2rem;
        span {
          margin-left: 5px;
          font-size: 2rem;
        }
      }
    }
    button {
      padding: 10px 45px;
      font-size: 2rem;
      margin: 0 10px;
      &:last-of-type {
        background: var(--secondary);
        color: #fff;
      }
    }
  }
`