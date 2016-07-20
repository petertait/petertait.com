import React, { Component, PropTypes } from 'react'
import reactCxs from 'react-cxs'

import { IndexLink } from 'react-router'
import Isvg from 'react-inlinesvg'

const Logo = () => {
  const logo = { border: 'none' }

  return (
    <IndexLink className={logo} to="/">
      <Isvg src='../images/logo.svg' />
    </IndexLink>
  )
}

export default Logo
