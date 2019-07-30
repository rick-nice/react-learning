import { connect } from 'react-redux'

import Navbar from './NavBarPure'
import { operations } from '../../pages/Home/duck'

const { getRandomBeer } = operations

const mapDispatchToProps = { getRandomBeer }

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
