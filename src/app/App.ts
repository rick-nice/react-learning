import { connect } from 'react-redux'

import App from './AppPure'
import { loadFromLS } from './actions'
import { setFavorites } from './pages/Favorites/duck/actions'

const mapDispatchToProps = { loadFromLS, setFavorites }

export default connect(null, mapDispatchToProps)(App)
