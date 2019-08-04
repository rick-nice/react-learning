import { connect } from 'react-redux'

import App from './AppPure'
import { loadFromLS } from './actions'
import { IStoreState } from './reducers'

const mapDispatchToProps = { loadFromLS }

const mapStateToProps = ({ favorites }: IStoreState) => ({ favorites })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
