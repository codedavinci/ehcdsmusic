export const SPOTIFY_PUBLIC_ID = '47922b8a29284a0bb98e151041a9a8fe'

export const API = 'https://api.spotify.com'
export const URL = 'https://accounts.spotify.com/'
export const PLACE_HOLDER = 'https://bit.ly/2AnkVGy'

export const AUTHORIZE_URL =
  'https://accounts.spotify.com/authorize' +
  '?response_type=token' +
  '&client_id=' +
  SPOTIFY_PUBLIC_ID +
  '&redirect_uri=' +
  encodeURIComponent(process.env.REDIRECT_URI)
