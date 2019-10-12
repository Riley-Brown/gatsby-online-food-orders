import styled from "styled-components"

export const StyledNav = styled.nav`
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  @media (max-width: 768px) {
    position: static;
  }
  .nav-container {
    max-width: 1400;
    padding: 1.45rem 1.0875rem;
    img {
      height: 70px;
      @media (max-width: 960px) {
        height: 50px;
      }
    }
  }
`
