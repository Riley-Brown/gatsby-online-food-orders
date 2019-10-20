import styled from "styled-components"

const paddingContainer = "25px"

export const StyledCustomerInfo = styled.div`
  .header {
    h4 {
      font-size: 2.5rem;
    }
  }
  .body {
    form {
      div {
        display: flex;
        padding: 1rem 25px;
        flex-direction: column;
        margin-bottom: 1rem;
        label {
          margin: 1rem 0;
        }
        input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        textarea {
          resize: none;
          padding: 10px;
          font-size: 1.6rem;
          font-family: inherit;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
      }
    }
  }
  .footer {
    button {
      padding: 10px 45px;
      font-size: 2rem;
      margin: 0 10px;
      width: 200px;
      &:last-of-type {
        background: var(--secondary);
        color: #fff;
      }
    }
  }
`
