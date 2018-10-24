import React from 'react'

import { Button } from '../'

import './profilebanner.css'

import { RandomColor } from '../../../utils'
import { getArtistByIdSelector } from '../../../selectors'
import { PLACE_HOLDER } from '../../../constants'

const ProfileBanner = ({ artists, artistId }) => {
  const artist = getArtistByIdSelector(artists, artistId)
  const banner = artist.images[0] || PLACE_HOLDER
  console.log('get random ', RandomColor())

  let setGradient = `linear-gradient(-20deg, ${RandomColor()} 0%, #fbfcdb  100%)`

  return (
    <div className="banner" style={{ backgroundImage: setGradient }}>
      <div className="profile">
        <div className="profile-name">
          <span>{artist.name}</span>
        </div>
      </div>

      <div className="profile-filters">
        <Button size="tiny">New Releases</Button>
      </div>
    </div>
  )
}

export default ProfileBanner
