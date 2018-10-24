import React from 'react'

import './button.css'

export default ({ children, size = '', ...rest }) => (
  <button className={`custom-button ${size}`} {...rest}>
    {children}
  </button>
)
