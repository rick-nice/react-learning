import { connect } from 'react-redux'

import HomePage from './HomePagePure'
import { setFavorite } from '../../duck/actions'
import { getSearchedBeers } from './duck/operations'
import { IStoreState } from '../../reducers'

const mapStateToProps = ({ beers }: IStoreState) => ({ beers })

const mapDispatchToProps = { setFavorite, getSearchedBeers }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
