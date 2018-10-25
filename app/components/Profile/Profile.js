import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AlbumList from '../AlbumList'
import Tracks from '../Tracks'
import { ProfileBanner } from '../Common'

import './profile.css'

class Profile extends Component {
  componentDidMount() {
    const { params, handleAlbums } = this.props
    handleAlbums(params.artistId)
  }

  render() {
    const {
      params: { artistId },
    } = this.props
    return (
      <div className="profile-wrapper">
        <ProfileBanner artistId={artistId} />

        <Route
          exact
          path={`/${artistId}`}
          render={() => (
            <>
              <AlbumList artistId={artistId} />
            </>
          )}
        />
        <Route path="/:artistId/:albumId" render={Tracks} />
      </div>
    )
  }
}

export default Profile
