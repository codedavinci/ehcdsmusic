import React, { Component } from 'react'

import { AlbumCard } from '../Common'
import './albumlist.css'

const AlbumList = ({ albums, artists }) => {
  return (
    <div className="cardlist-wrapper">
      {albums.map(album => {
        return <AlbumCard key={album.id} {...album} />
      })}
    </div>
  )
}

AlbumList.defaultProps = {
  albums: [],
}
export default AlbumList
