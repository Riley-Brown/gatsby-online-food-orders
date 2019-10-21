import styled from "styled-components"

export const StyledCustomerInfo = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 2.5rem;
    }
  }
  .body {
    height: calc(100vh - 128px);
  }
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
        -webkit-appearance: none;
      }
      textarea {
        resize: none;
        padding: 10px;
        font-size: 1.6rem;
        font-family: inherit;
        border-radius: 4px;
        border: 1px solid #ccc;
        -webkit-appearance: none;
      }
    }
  }
  .footer {
    flex-direction: row;
    @media (max-width: 500px) {
      flex-direction: row !important;
    }

    button {
      width: 200px;
      min-height: 4rem;
      position: relative;
      img {
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media (max-width: 500px) {
        width: 25%;
        &:last-of-type {
          width: 50%;
        }
      }
    }
  }
`
