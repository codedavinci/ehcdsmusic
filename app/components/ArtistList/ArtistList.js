import React from 'react'
import { Spring } from 'react-spring'

import { ArtistCard } from '../Common'
import './artistlist.css'

const ArtistList = ({ artists }) => {
  return (
    <div className="cardlist-wrapper">
      {artists.map(artist => (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <ArtistCard key={artist.id} styles={props} {...artist} />}
        </Spring>
      ))}
    </div>
  )
}

ArtistList.defaultProps = {
  artists: [],
}
export default ArtistList

{
  /* <AlbumCard key={artist.id} images={artist.images} name={artist.name} type="album" /> */
}
