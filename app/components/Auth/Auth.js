import React from 'react'
import { AUTHORIZE_URL } from '../../constants'

import './auth.css'

const Auth = () => (
  <div className="landing">
    <i className="fas fa-headphones phone" />
    <h1 className="motto">Looking for cool beats?</h1>
    <a href={AUTHORIZE_URL} className="special-link">
      hop on
    </a>
  </div>
)

export default Auth
