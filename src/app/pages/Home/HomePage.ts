import { connect } from 'react-redux'

import HomePage from './HomePagePure'
import { toggleFavorite } from '../Favorites/duck/actions'
import { requestBeer } from './duck/actions'
import { IStoreState } from '../../reducers'

const mapStateToProps = ({ beers }: IStoreState) => ({ beers })

const mapDispatchToProps = { toggleFavorite, requestBeer }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
