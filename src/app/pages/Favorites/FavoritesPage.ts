import { connect } from 'react-redux'

import { IStoreState } from '../../reducers'
import { requestBeer } from '../Home/duck/actions'
import { toggleFavorite } from './duck/actions'
import FavoritesPage from './FavoritesPagePure'

const mapStateToProps = ({ favorites, beers }: IStoreState) => ({
  favorites,
  beers,
})

const mapDispatchToProps = { requestBeer, toggleFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesPage)
