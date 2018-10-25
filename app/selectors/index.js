import { safeGet } from '../utils'

export const getArtistByIdSelector = (artists, id) =>
  artists.find(a => a.id === id)

export const getGenreByArtistIdSelector = (artists, id) => {
  const artist = getArtistByIdSelector(artists, id)

  const genre = safeGet(['genres', 0], artist) || 'N/A'

  return genre
}

export const getAlbumById = (albums, id) => albums.find(a => a.id === id)
