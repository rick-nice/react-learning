import { connect } from 'react-redux'

import BeerList from './BeerListPure'
import { setFavorite } from '../../duck'

const mapStateToProps = (store) => ({ beers: store.beers })

const mapDispatchToProps = { setFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
