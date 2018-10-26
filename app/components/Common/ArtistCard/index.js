import React from 'react'
import { Link } from 'react-router-dom'

import { ArtistDescription, Followers } from '../../Common'

import { PLACE_HOLDER } from '../../../constants'
import { safeGet } from '../../../utils'

import './artistcard.css'

const ArtistCard = ({ images, id, followers, name, styles }) => {
  const image = safeGet([0, 'url'], images) || PLACE_HOLDER

  return (
    <div className="artist-card-wrapper" style={{ ...styles }}>
      <Link
        to={`/${id}`}
        className="artist-img"
        style={{ backgroundImage: `url(${image}` }}
      />
      <div className="artist-info">
        <ArtistDescription name={name} followers={followers} />
      </div>
    </div>
  )
}

export default ArtistCard
