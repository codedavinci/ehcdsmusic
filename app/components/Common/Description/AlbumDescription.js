import React from 'react'
import { Ratings } from '../../Ratings'
import './description.css'

const AlbumDescription = ({
  album = 'Drake',
  description = ' I just wanna say that this is crazy yyyyyy :D:DD',
  popularity,
}) => (
  <div className="desc-wrapper">
    <div className="text album">{album}</div>
    <p className="album-description ">{description}</p>
    <Ratings />
  </div>
)

export default AlbumDescription
