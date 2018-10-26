import withContext from '../../withContext'
import ProfileBanner from './ProfileBanner'

export default withContext(ProfileBanner, ['artists', 'isNewRelease'])
