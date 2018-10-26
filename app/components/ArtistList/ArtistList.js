import React from 'react'
import { Spring } from 'react-spring'
import PropTypes from 'prop-types'

import { ArtistCard, Loader } from '../Common'

import './artistlist.css'

const ArtistList = ({ artists, isFetching }) => {
  const ArtistCards = artists.map(artist => (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} key={artist.id}>
      {props => <ArtistCard styles={props} {...artist} />}
    </Spring>
  ))

  return (
    <div className="cardlist-wrapper">
      {isFetching ? <Loader /> : ArtistCards}
    </div>
  )
}

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default ArtistList
