import React from 'react'
import PropTypes from 'prop-types'

import { Ratings } from '../../Ratings'
import './description.css'

const AlbumDescription = ({
  name,
  popularity,
  year,
  genre,
  artist,
  isNewRelease,
}) => (
  <div className="desc-wrapper">
    {isNewRelease && <span className="artist">{artist.name} </span>}
    <span className="text album">{name}</span>
    <span className="album-description">{genre}</span>
    <div className="album-bottom-wrapper">
      <Ratings popularity={popularity} />
      <span>{new Date(year).getFullYear()}</span>
    </div>
  </div>
)

AlbumDescription.propTypes = {
  name: PropTypes.string.isRequired,
  popularity: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  genre: PropTypes.string,
  artist: PropTypes.object,
  isNewRelease: PropTypes.bool.isRequired,
}

AlbumDescription.defaulProps = {
  genre: '',
  artist: {},
  popularity: 0,
}

export default AlbumDescription
