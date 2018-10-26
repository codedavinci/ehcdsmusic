import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../../Sproutify.png'
import './layout.css'

const Logo = ({ handleDefault }) => (
  <div>
    <Link to="/" onClick={handleDefault}>
      <img src={logo} alt="That's the logo" className="app-logo" />
    </Link>
  </div>
)

const Layout = ({ children, handleDefault }) => (
  <div className="main-container">
    <div className="app-header">
      <Logo handleDefault={handleDefault} />
    </div>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  handleDefault: PropTypes.func.isRequired,
}

export default Layout
