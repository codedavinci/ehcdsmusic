import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

const Button = ({ children, size = '', ...rest }) => (
  <button className={`custom-button ${size}`} {...rest}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

Button.defaultProps = {
  size: 'small',
}

export default Button
