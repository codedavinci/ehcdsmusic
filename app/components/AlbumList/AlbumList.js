import React from 'react'
import { Spring } from 'react-spring'

import { AlbumCard, Loader } from '../Common'
import { getGenreByArtistIdSelector } from '../../selectors'

import './albumlist.css'

const AlbumList = ({ albums, artists, isFetching, artistId }) => {
  const genre = getGenreByArtistIdSelector(artists, artistId)

  return (
    <div className="cardlist-wrapper">
      {isFetching ? (
        <Loader />
      ) : (
        albums.map(album => (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} key={album.id}>
            {props => (
              <AlbumCard
                artistId={artistId}
                styles={props}
                genre={genre}
                {...album}
              />
            )}
          </Spring>
        ))
      )}
    </div>
  )
}

AlbumList.defaultProps = {
  albums: [],
}
export default AlbumList
