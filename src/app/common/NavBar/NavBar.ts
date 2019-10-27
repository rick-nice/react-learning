import { connect } from 'react-redux'

import Navbar from './NavBarPure'
import { requestBeer } from '../../pages/Home/duck/actions'

const mapDispatchToProps = { requestBeer }

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
