import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../'

import './profilebanner.css'

import { randomColor } from '../../../utils'
import { getArtistByIdSelector } from '../../../selectors'

const ProfileBanner = ({ artists, artistId }) => {
  const artist = getArtistByIdSelector(artists, artistId)

  let setGradient = `linear-gradient(-20deg, ${randomColor()} 0%, #fbfcdb  100%)`

  return (
    <div className="banner" style={{ backgroundImage: setGradient }}>
      <div className="profile">
        <div className="profile-name">
          <span>{artist.name}</span>
        </div>
      </div>

      <div className="profile-filters">
        <Link to="/" className="fas fa-search spyglass" />
        <Button size="tiny">New Releases</Button>
      </div>
    </div>
  )
}

export default ProfileBanner
