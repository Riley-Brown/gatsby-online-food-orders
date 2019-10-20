import styled from "styled-components"

const paddingContainer = "25px"
const paddingContainerMobile = "13px"

export const StyledConfirmOrder = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 22;
  overflow-y: auto;
  #confirm-order-modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    width: 90%;
    overflow: hidden;
    max-height: 600px;
    @media (max-width: 500px) {
      max-height: initial;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      transform: none;
    }
    .header {
      background: var(--secondary);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      text-align: center;
      position: relative;
      @media (max-width: 500px) {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
      }
      button {
        width: 100%;
        height: 75px;
        padding: ${paddingContainer};
        @media (max-width: 500px) {
          padding: ${paddingContainerMobile};
          height: 60px;
        }
        h2 {
          font-size: 2.2rem;
          color: #fff;
        }
        img {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .body {
      background: #fff;
      max-height: 450px;
      height: calc(100vh - 150px);
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      @media (max-width: 500px) {
        max-height: initial;
      }
    }
    .footer {
      background: #fff;
      height: 75px;
      padding: ${paddingContainer};
      border-top: 1px solid #ccc;
      text-align: center;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      button {
        padding: 10px 45px;
        font-size: 2rem;
        margin: 0 10px;
        @media (max-width: 500px) {
          padding: 10px 20px;
        }
        &:last-of-type {
          background: var(--secondary);
          color: #fff;
        }
      }
      @media (max-width: 500px) {
        padding: ${paddingContainerMobile};
        flex-direction: column;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        position: fixed;
        height: auto;
      }
    }
  }
`
