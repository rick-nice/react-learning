import { connect } from 'react-redux'

import { IStoreState } from '../../reducers'
import { loadFavoriteBeers } from '../Home/duck/operations'
import { toggleFavorite } from './duck/operations'
import FavoritesPage from './FavoritesPagePure'

const mapStateToProps = ({ favorites, beers }: IStoreState) => ({
  favorites,
  beers,
})

const mapDispatchToProps = { loadFavoriteBeers, toggleFavorite }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesPage)
