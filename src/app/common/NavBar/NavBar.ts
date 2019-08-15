import { connect } from 'react-redux'

import Navbar from './NavBarPure'
import { loadRandomBeer } from '../../pages/Home/duck/operations'

const mapDispatchToProps = { loadRandomBeer }

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
