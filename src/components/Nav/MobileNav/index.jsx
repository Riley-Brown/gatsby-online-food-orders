import React from "react"
import { CSSTransition } from "react-transition-group"

export default function MobileNav({ children, isMobile, showMobileMenu }) {
  if (isMobile) {
    return (
      <CSSTransition
        classNames="nav"
        timeout={300}
        in={showMobileMenu}
        unmountOnExit
      >
        {children}
      </CSSTransition>
    )
  } else {
    return children
  }
}
