import { connect } from 'react-redux'

import App from './AppPure'
import { loadFromLS } from './actions'
import { setFavorites } from './duck/actions'
import { IStoreState } from './reducers'

const mapDispatchToProps = { loadFromLS, setFavorites }

const mapStateToProps = ({ favorites }: IStoreState) => ({ favorites })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
