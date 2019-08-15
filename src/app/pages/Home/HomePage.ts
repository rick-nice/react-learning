import { connect } from 'react-redux'

import HomePage from './HomePagePure'
import { toggleFavorite } from '../Favorites/duck/operations'
import { loadSearchedBeers } from './duck/operations'
import { IStoreState } from '../../reducers'

const mapStateToProps = ({ beers }: IStoreState) => ({ beers })

const mapDispatchToProps = { toggleFavorite, loadSearchedBeers }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
