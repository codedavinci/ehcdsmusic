import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AlbumList from '../AlbumList'
import Tracks from '../Tracks'
import { ProfileBanner } from '../Common'

import { safeGet } from '../../utils'
import { getArtistByIdSelector } from '../../selectors'

import './profile.css'

class Profile extends Component {
  componentDidMount() {
    const { params, handleAlbums } = this.props
    handleAlbums(params.artistId)
  }

  render() {
    const { params, handleNewRelease, handleDefault, artists } = this.props

    const albumId = safeGet(['albumId'], params)
    const artistId = safeGet(['artistId'], params)

    const artist = getArtistByIdSelector(artists, artistId)

    const artistName = safeGet(['name'], artist)

    return (
      <div className="profile-wrapper">
        <ProfileBanner
          name={artistName}
          artistId={artistId}
          handleDefault={handleDefault}
        />

        <Route
          exact
          path={`/${artistId}`}
          render={props => (
            <AlbumList {...props} handleNewRelease={handleNewRelease} />
          )}
        />
        <Route path="/:artistId/:albumId" component={Tracks} />
      </div>
    )
  }
}

export default Profile
