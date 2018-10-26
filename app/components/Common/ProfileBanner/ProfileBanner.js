import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { randomColor } from '../../../utils'

import './profilebanner.css'

const ProfileBanner = ({ name, isNewRelease, handleDefault }) => {
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

ProfileBanner.propTypes = {
  name: PropTypes.string,
  isNewRelease: PropTypes.bool.isRequired,
  handleDefault: PropTypes.func.isRequired,
}

ProfileBanner.defaultProps = {
  name: '',
}
export default ProfileBanner
