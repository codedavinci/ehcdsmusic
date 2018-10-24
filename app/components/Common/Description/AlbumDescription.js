import React from 'react'
import { Ratings } from '../../Ratings'
import './description.css'

const AlbumDescription = ({ name = 'Drake', popularity, year, genre }) => (
  <div className="desc-wrapper">
    <span className="text album">{name}</span>
    <span className="album-description">{genre}</span>
    <div className="album-bottom-wrapper">
      <Ratings popularity={popularity} />
      <span>{new Date(year).getFullYear()}</span>
    </div>
  </div>
)

export default AlbumDescription
