import React from 'react'
import { Link } from 'react-router-dom'

import { AlbumDescription } from '../'
import { safeGet } from '../../../utils'

import { PLACE_HOLDER } from '../../../constants'
import './albumcard.css'

const AlbumCard = ({ name, popularity, images, year, genre, styles }) => {
  const image = safeGet([0, 'url'], images) || PLACE_HOLDER

  return (
    <div className="card" style={styles}>
      <Link
        to="/"
        className="card-item"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <AlbumDescription popularity={popularity} name={name} year={year} genre={genre} />
    </div>
  )
}

export default AlbumCard
