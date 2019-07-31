import { connect } from 'react-redux'

import Navbar from './NavBarPure'
import { getRandomBeer } from '../../pages/Home/duck/operations'

const mapDispatchToProps = { getRandomBeer }

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
