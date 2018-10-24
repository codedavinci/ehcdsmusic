import { withRouter } from 'react-router-dom'
import { MainComponent, ArtistConsumer as p } from './Main'

export const ArtistConsumer = p
export const Main = withRouter(MainComponent)
