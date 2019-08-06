import { connect } from 'react-redux'

import BeerPage from './BeerPagePure'
import { getCurrentBeer } from '../Home/duck/operations'

const mapDispatchToProps = { getCurrentBeer }

export default connect(
  null,
  mapDispatchToProps
)(BeerPage)
