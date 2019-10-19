import styled from "styled-components"

const paddingContainer = "25px"

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
    margin: 5% 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 600px;
    width: 80%;
  }
`
