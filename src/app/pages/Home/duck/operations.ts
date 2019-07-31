import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { successReceiveBeer, failureReceiveBeer } from './actions'

const URL = 'https://api.punkapi.com/v2/beers'

export function getRandomBeer(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const response = await fetch(`${URL}/random`)
      const beers = await response.json()

      dispatch(successReceiveBeer(beers))
    } catch (err) {
      dispatch(failureReceiveBeer(err))
    }
  }
}
