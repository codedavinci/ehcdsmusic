import React from 'react'
import { Link } from 'react-router-dom'

import { AlbumDescription } from '../'
import { safeGet } from '../../../utils'

import './albumcard.css'
import { PLACE_HOLDER } from '../../../constants'

const AlbumCard = ({ name, popularity, images, album, description }) => {
  const image = safeGet([0, 'url'], images) || PLACE_HOLDER

  return (
    <div className={`card`}>
      <Link
        to="/"
        className="card-item"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <AlbumDescription popularity={popularity} album={album} description={description} />
    </div>
  )
}

export default AlbumCard
