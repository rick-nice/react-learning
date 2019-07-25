import { connect } from 'react-redux'

import NavbarComponent from './NavbarComponent'
import { getRandomBeerAction } from '../home/duck/index'

const mapDispatchToProps = (dispatch) => ({
  getRandomBeer: (id) => dispatch(getRandomBeerAction(id)),
})

export default connect(
  null,
  mapDispatchToProps
)(NavbarComponent)
