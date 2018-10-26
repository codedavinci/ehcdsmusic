import React from 'react'
import { Spring } from 'react-spring'
import PropTypes from 'prop-types'

import { AlbumCard, Loader, Button } from '../Common'

import { getGenreByArtistIdSelector } from '../../selectors'
import { safeGet } from '../../utils'

import './albumlist.css'

const AlbumList = ({
  albums,
  artists,
  isFetching,
  isNewRelease,
  handleNewRelease,
}) => {
  return (
    <>
      <div className="cardlist-newreleases">
        <Button onClick={handleNewRelease}>new releases</Button>
      </div>
      <div className="cardlist-wrapper">
        {isFetching ? (
          <Loader />
        ) : (
          albums.map(album => (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} key={album.id}>
              {props => {
                const artist = safeGet(['artists', 0], album)
                const genre = getGenreByArtistIdSelector(artists, artist.id)

                return (
                  <AlbumCard
                    styles={props}
                    genre={genre}
                    artist={artist}
                    isNewRelease={isNewRelease}
                    album={album}
                  />
                )
              }}
            </Spring>
          ))
        )}
      </div>
    </>
  )
}

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
  artists: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  isNewRelease: PropTypes.bool.isRequired,
  handleNewRelease: PropTypes.func.isRequired,
}

AlbumList.defaultProps = {
  artists: [],
}
export default AlbumList
