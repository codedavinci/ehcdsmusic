import React from 'react'
import PropTypes from 'prop-types'

import { Followers } from '../'
import './description.css'

const ArtistDescripition = ({ name, followers }) => {
  return (
    <div className="desc-wrapper">
      <div className="text artist">{name}</div>
      <Followers followers={followers} />
    </div>
  )
}

ArtistDescripition.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ArtistDescripition
