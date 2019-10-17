import styled from "styled-components"

export const StyledConfirmOrder = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 22;
  display: flex;
  justify-content: center;
  align-items: center;
  .review-order {
    background: #fff;
    max-width: 600px;
    max-height: 600px;
    width: 100%;
    padding: 25px;
    height: 100%;
    .header {
      h4 {
        text-align: center;
        font-size: 2.5rem;
      }
    }
  }
`
