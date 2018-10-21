import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => (
  <div className="main-container">
    <div className="app-header">
      <h1 className="app-title">Sproutify</h1>
    </div>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
