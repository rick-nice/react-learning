import { connect } from 'react-redux'

import BeerListComponent from './BeerListComponent'
import { setFavoriteAction } from '../duck/index'

const mapStateToProps = (store) => ({ beerList: store.beers })

const mapDispatchToProps = (dispatch) => ({
  setFavorite: (id) => dispatch(setFavoriteAction(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerListComponent)
