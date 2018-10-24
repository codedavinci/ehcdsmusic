import axios from 'axios'
import { map, applySpec, pipe, path } from 'ramda'
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
      tracks: path(['total_tracks']),
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

    const albums = safeGet(['data', 'items'], res)

    const albs = albumsNormalization(albums)

    return albs
  }
}

export default function({ token }) {
  return new Spotify({ token })
}
