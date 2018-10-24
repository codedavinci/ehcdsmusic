import React, { Component } from 'react'
import queryString from 'query-string'
import { Route, Redirect, Switch } from 'react-router-dom'

import { Layout } from '../Layout'
import { Auth } from '../Auth'
import { Home } from '../Home'
import { Profile } from '../Profile'

import Spotify from '../../clients/spotify'
import { safeGet, delayRequest } from '../../utils'

const ArtistContext = React.createContext()

const Login = () => <Redirect to="/login" />

export class MainComponent extends Component {
  state = {
    error: '',
    artists: [],
    albums: [],
    token: null,
    isFetching: false,
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
        this.spotify = Spotify({ token })
        history.push('/')
      })
    }
  }

  handleLogout = error => {
    this.setState({ error, isAuthed: false })
  }

  handleSearch = async name => {
    this.setState({ isFetching: true })

    await delayRequest(2000)
    const artists = await this.spotify.searchArtists(name).catch(this.handleLogout)

    this.setState({ artists, isFetching: false })
  }

  handleAlbums = async artistId => {
    this.setState({ isFetching: true })

    await delayRequest(1000)
    const albums = await this.spotify.getAlbums(artistId).catch(this.handleLogout)

    this.setState({ albums, isFetching: false })
  }

  render() {
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
                return isAuthed ? <Home handleSearch={this.handleSearch} /> : <Login />
              }}
            />
            <Route
              path="/:artistId"
              render={({ match }) => {
                return isAuthed ? (
                  <Profile handleAlbums={this.handleAlbums} {...match} />
                ) : (
                  <Login />
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
