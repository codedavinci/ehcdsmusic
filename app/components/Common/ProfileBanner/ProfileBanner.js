import React from 'react'
import { Link } from 'react-router-dom'

import './profilebanner.css'

import { randomColor } from '../../../utils'
import { getArtistByIdSelector } from '../../../selectors'

const ProfileBanner = ({
  name,
  isNewRelease,
  handleNewRelease,
  handleDefault,
}) => {
  let setGradient = `linear-gradient(-20deg, ${randomColor()} 0%, #fbfcdb  100%)`

  return (
    <div className="banner" style={{ backgroundImage: setGradient }}>
      <div className="profile-name">
        <span>{isNewRelease ? 'new releases' : name}</span>
      </div>

      <div className="profile-filters">
        <Link
          to="/"
          onClick={handleDefault}
          className="fas fa-search spyglass"
        />
      </div>
    </div>
  )
}

export default ProfileBanner
