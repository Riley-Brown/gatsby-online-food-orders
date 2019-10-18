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
  display: flex;
  justify-content: center;
  align-items: center;
  #confirm-order-modal {
    max-width: 600px;
    max-height: 600px;
    width: 100%;
    height: 100%;
  }
`
