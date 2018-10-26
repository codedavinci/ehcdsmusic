import React from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import './followers.css'

const Followers = ({ followers }) => (
  <span className="followers">
    Followers: {numeral(followers).format('0a')}
  </span>
)

Followers.propTypes = {
  followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Followers
