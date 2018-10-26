import React from 'react'
import { Spring } from 'react-spring'
import PropTypes from 'prop-types'

import { getAlbumById } from '../../selectors'
import { safeGet } from '../../utils'
import { PLACE_HOLDER } from '../../constants'

import './tracks.css'

const ImageWithAnimation = ({ image }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} key={image}>
    {props => (
      <img
        style={props}
        className="album-cover"
        src={image}
        alt="Album cover"
      />
    )}
  </Spring>
)

const Tracks = ({ albums, match, history }) => {
  const albumId = safeGet(['params', 'albumId'], match)

  const album = getAlbumById(albums, albumId)

  const image = safeGet([0, 'url'], album.images) || PLACE_HOLDER

  return (
    <div className="tracks-wrapper">
      <span className="back" onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left back" />
        back
      </span>
      <ImageWithAnimation image={image} />
      <h3 className="album-name">{album.name}</h3>
      <ol className="track-list">
        {album.tracks.map(track => (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} key={track.id}>
            {props => (
              <li className="track-item" key={track.id} style={props}>
                {track.name}
              </li>
            )}
          </Spring>
        ))}
      </ol>
    </div>
  )
}

Tracks.PropTypes = {
  albums: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Tracks
