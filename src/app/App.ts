import { connect } from 'react-redux'

import App from './AppPure'
import { loadFromLS } from './actions'
import { setFavorites } from './duck/actions'

const mapDispatchToProps = { loadFromLS, setFavorites }

export default connect(
  null,
  mapDispatchToProps
)(App)
