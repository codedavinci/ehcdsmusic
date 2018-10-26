import React from 'react'
import { Link } from 'react-router-dom'

import { AlbumDescription } from '../'
import { safeGet } from '../../../utils'

import { PLACE_HOLDER } from '../../../constants'
import './albumcard.css'

const AlbumCard = ({ genre, styles, isNewRelease, album, artist }) => {
  const { id, name, images, year } = album

  const image = safeGet([0, 'url'], images) || PLACE_HOLDER

  return (
    <div className="card" style={styles}>
      <Link
        to={`/${artist.id}/${id}`}
        className="card-item"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <AlbumDescription
        artist={artist}
        name={name}
        year={year}
        genre={genre}
        isNewRelease={isNewRelease}
      />
    </div>
  )
}

export default AlbumCard
