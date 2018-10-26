import { withRouter } from 'react-router-dom'
import MainComponent, { ArtistConsumer } from './MainContainer'

const Main = withRouter(MainComponent)

export { ArtistConsumer, Main }
