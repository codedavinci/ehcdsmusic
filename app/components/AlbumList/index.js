import withContext from '../withContext'
import AlbumList from './AlbumList'

export default withContext(AlbumList, ['albums', 'artists', 'isFetching'])
