import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useLayoutEffect } from "react"
import logo from "assets/img/rawberri-logo-cropped-bg.png"

import { StyledNav } from "./StyledNav"

import MobileNav from "./MobileNav"

const Nav = ({ siteTitle, pathname }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 1100px)")
    if (mq.matches) {
      setIsMobile(true)
    }
    mq.addListener(() => {
      console.log(mq.matches)
      if (mq.matches) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  }, [])
  return (
    <StyledNav showMobileMenu={showMobileMenu}>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} />
        </Link>
        <MobileNav isMobile={isMobile} showMobileMenu={showMobileMenu}>
          <ul onClick={() => setShowMobileMenu(false)}>
            <li>
              <a href="https://distracted-goldwasser-6c2aaa.netlify.com/">
                Home
              </a>
            </li>
            <li>
              <a href="https://distracted-goldwasser-6c2aaa.netlify.com/about">
                About
              </a>
            </li>
            <li>
              <a href="https://distracted-goldwasser-6c2aaa.netlify.com/contact">
                Contact
              </a>
            </li>
            <li>
              <a
                href="http://places.singleplatform.com/rawberri-3/menu"
                target="_blank"
              >
                Menu
              </a>
            </li>
            <li>
              <a href="https://wizardly-jang-d732c8.netlify.com/">Store</a>
            </li>
            <li data-active="true">
              <a href="https://loving-kilby-fc3f0a.netlify.com/">
                Order Online
              </a>
            </li>
          </ul>
        </MobileNav>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="menu-icon"
          name="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </StyledNav>
  )
}

export default Nav
