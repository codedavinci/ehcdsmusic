import axios from 'axios'
import { map, applySpec, pipe, path, groupBy, prop } from 'ramda'
import { safeGet } from '../utils'
import { API } from '../constants'

const artistsNormalization = artists => {
  let mapper = map(
    applySpec({
      id: path(['id']),
      genres: path(['genres']),
      images: path(['images']),
      popularity: path(['popularity']),
      name: path(['name']),
      followers: path(['followers', 'total']),
    })
  )

  return pipe(mapper)(artists)
}

const albumsNormalization = albums => {
  let mapper = map(
    applySpec({
      id: path(['id']),
      name: path(['name']),
      year: path(['release_date']),
      images: path(['images']),
      tracks: path(['tracks']),
    })
  )

  return pipe(mapper)(albums)
}

class Spotify {
  constructor({ token }) {
    this.apiInstance = axios.create({
      baseURL: API,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  async searchArtists(name) {
    if (!name) {
      throw new Error('Please, specify a name')
    }

    const res = await this.apiInstance.get('/v1/search', {
      params: {
        q: name,
        type: 'artist',
        limit: 30,
      },
    })

    const artists = safeGet(['data', 'artists', 'items'], res)

    return artistsNormalization(artists)
  }

  async getAlbums(artistId) {
    if (!artistId) {
      throw new Error('Please, specify an artistId')
    }

    const res = await this.apiInstance.get(`/v1/artists/${artistId}/albums`, {
      limit: 30,
    })

    const albumsList = safeGet(['data', 'items'], res)

    const albumsNormalized = albumsNormalization(albumsList)

    const albums = await Promise.all(
      albumsNormalized.map(async album => {
        let tracks = await this.getAlbumsTracks(album.id)

        return { ...album, tracks }
      })
    )

    return albums
  }

  async getAlbumsTracks(albumId) {
    if (!albumId) {
      throw new Error('Please, specify an albumId')
    }

    const res = await this.apiInstance.get(`v1/albums/${albumId}/tracks`, {
      limit: 30,
    })

    const tracks = safeGet(['data', 'items'], res)

    return tracks
  }
}

export default function({ token }) {
  return new Spotify({ token })
}
