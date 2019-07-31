import { connect } from 'react-redux'

import BeerList from './BeerListPure'
import { actions } from '../../duck'
import { IStoreState } from '../../reducers'

const { setFavorite } = actions

const mapStateToProps = (store: IStoreState) => ({ beers: store.beers })

const mapDispatchToProps = { setFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)
