import { connect } from 'react-redux'

import Navbar from './NavBarPure'
import { getRandomBeer } from '../../pages/Home/duck'

const mapDispatchToProps = { getRandomBeer }

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
