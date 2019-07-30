import { connect } from 'react-redux'

import BeerList from './BeerListPure'
import { setFavorite } from '../../duck'
import { StoreState } from '../../reducers'

const mapStateToProps = (store: StoreState) => ({ beers: store.beers })

const mapDispatchToProps = { setFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
