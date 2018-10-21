import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../Sproutify.png'
import './layout.css'

const Logo = () => (
  <div>
    <img src={logo} alt="That's the logo" className="app-logo" />
    <h1 className="app-title">Sproutify</h1>
  </div>
)

const Layout = ({ children }) => (
  <div className="main-container">
    <div className="app-header">
      <Logo />
    </div>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
