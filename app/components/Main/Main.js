import React, { Component } from 'react'
import queryString from 'query-string'
import { Route, Redirect, Switch } from 'react-router-dom'

import { Layout } from '../Layout'
import { Auth } from '../Auth'
import { Home } from '../Home'
import { Profile } from '../Profile'
import { PrivateRoute, history } from '../Common'

import Spotify from '../../clients/spotify'
import { safeGet } from '../../utils'

const ArtistContext = React.createContext()

const LoggIn = () => <Redirect to="/login" />

export class MainComponent extends Component {
  state = {
    error: '',
    artists: [],
    albums: [],
    token: null,
    isAuthed: false,
  }

  componentDidMount() {
    this.handleAuth()
  }

  handleAuth = () => {
    const { history, location } = this.props

    const tokenObj = queryString.parse(location.hash)
    const token = safeGet(['access_token'], tokenObj)

    if (token) {
      this.setState({ token, isAuthed: true }, () => {
        this.spotifyInstance = Spotify({ token })
        history.push('/')
      })
    }
  }

  handleLogout = error => {
    this.setState({ error, isAuthed: false })
  }

  handleSearch = async name => {
    const artists = await this.spotifyInstance.searchArtists(name).catch(this.handleLogout)
    this.setState({ artists })
  }

  handleAlbums = async artistId => {
    const albums = await this.spotifyInstance.getAlbums(artistId).catch(this.handleLogout)
    this.setState({ albums })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { isAuthed } = this.state

    return (
      <Layout>
        <ArtistContext.Provider value={this.state}>
          <Switch>
            <Route path="/login" component={Auth} />
            <Route
              exact
              path="/"
              render={() => {
                return isAuthed ? <Home handleSearch={this.handleSearch} /> : <LoggIn />
              }}
            />
            <Route
              path="/:artistId"
              render={({ match }) => {
                return isAuthed ? (
                  <Profile handleAlbums={this.handleAlbums} {...match} />
                ) : (
                  <LoggIn />
                )
              }}
            />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </ArtistContext.Provider>
      </Layout>
    )
  }
}

export const ArtistConsumer = ArtistContext.Consumer
