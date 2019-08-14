import { connect } from 'react-redux'

import BeerPage from './BeerPagePure'
import { selectBeer } from '../Home/duck/operations'
import { IStoreState } from '../../reducers'

const mapDispatchToProps = { selectBeer }

const mapStateToProps = ({ beers: { selected } }: IStoreState) => ({ selected })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerPage)
