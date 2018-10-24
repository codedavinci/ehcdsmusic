import React, { Component } from 'react'

import AlbumList from '../AlbumList'
import { ProfileBanner } from '../Common'

import './profile.css'

class Profile extends Component {
  componentDidMount() {
    const { params, handleAlbums } = this.props
    handleAlbums(params.artistId)
  }

  render() {
    const { params } = this.props
    return (
      <div className="profile-wrapper">
        <ProfileBanner artistId={params.artistId} />
        <AlbumList artistId={params.artistId} />
      </div>
    )
  }
}

export default Profile
