import React from 'react'
import numeral from 'numeral'
import './followers.css'

export default ({ followers }) => (
  <span className="followers">Followers: {numeral(followers).format('0a')}</span>
)
