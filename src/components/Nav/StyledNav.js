import styled from "styled-components"
import { transitionClasses } from "helpers/transitionClasses"

export const StyledNav = styled.nav`
  ${transitionClasses("nav", 400)};
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  @media (max-width: 1100px) {
    height: 80px;
  }
  @media (max-width: 500px) {
    height: 50px;
  }
  .nav-container {
    max-width: 1400px;
    padding: 1.45rem 1.0875rem;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 500px) {
      padding: 0;
      height: 100%;
    }
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      @media (max-width: 1100px) {
        position: fixed;
        overflow-y: auto;
        top: 80px;
        bottom: 0;
        right: 0;
        left: 0;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        justify-content: center;
      }
      @media (max-height: 600px) {
        justify-content: initial;
        -webkit-overflow-scrolling: touch;
      }
      @media (max-width: 500px) {
        top: 50px;
      }
      li {
        font-size: 2rem;
        color: var(--secondary);
        @media (max-width: 1100px) {
          font-size: 3rem;
          margin: 20px;
        }
        &:first-of-type {
          @media (max-height: 600px) {
            margin-top: 40px;
          }
        }
        a {
          text-decoration: none;
          transition: 200ms;
          color: inherit;
          margin: 0 5px;
          padding: 10px;
          border-radius: 4px;
          @media (max-width: 1100px) {
            padding: 10px 30px;
          }
          &:hover {
            opacity: 0.7;
            background: var(--secondary);
            color: #fff;
          }
        }
      }
      li[data-active="true"] {
        a {
          opacity: 0.7;
          background: var(--secondary);
          color: #fff;
        }
      }
    }
    img {
      height: 70px;
      @media (max-width: 1100px) {
        height: 50px;
      }
      @media (max-width: 500px) {
        height: 40px;
      }
    }
    .menu-icon {
      display: none;
      width: 50px;
      height: 40px;
      cursor: pointer;
      position: relative;
      transition: 300ms ease-in-out;
      @media (max-width: 1100px) {
        display: flex;
      }
      @media (max-width: 500px) {
        height: 30px;
        width: 40px;
      }
      span {
        display: block;
        position: absolute;
        height: 6px;
        width: 100%;
        background: #222;
        transition: 300ms ease-in-out;
        @media (max-width: 500px) {
          height: 4px;
        }
        &:nth-child(1) {
          top: ${props => (props.showMobileMenu ? "15px" : 0)};
          transform: ${props => (props.showMobileMenu ? "rotate(135deg)" : 0)};
          @media (max-width: 500px) {
            top: ${props => (props.showMobileMenu ? "13px" : 0)};
          }
        }
        &:nth-child(2) {
          top: 15px;
          left: ${props => (props.showMobileMenu ? "-60px" : 0)};
          opacity: ${props => (props.showMobileMenu ? "0" : 1)};
          @media (max-width: 500px) {
            top: 10px;
          }
        }
        &:nth-child(3) {
          top: ${props => (props.showMobileMenu ? "15px" : "30px")};
          transform: ${props => (props.showMobileMenu ? "rotate(-135deg)" : 0)};
          @media (max-width: 500px) {
            top: ${props => (props.showMobileMenu ? "13px" : "20px")};
          }
        }
      }
    }
  }
`
