import { successReceiveBeer, failureReceiveBeer } from './actions'

export default function getRandomBeerAction() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers/random')
      const beers = await response.json()
      dispatch(successReceiveBeer(beers))
    } catch (err) {
      dispatch(failureReceiveBeer(err))
    }
  }
}
