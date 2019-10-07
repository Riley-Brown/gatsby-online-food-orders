import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "assets/img/rawberri-logo-cropped-bg.png"

import { StyledNav } from "./StyledNav"

const Nav = ({ siteTitle }) => (
  <StyledNav>
    <div className="nav-container">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  </StyledNav>
)

export default Nav
