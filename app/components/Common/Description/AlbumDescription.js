import React from 'react'
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

export default AlbumDescription
