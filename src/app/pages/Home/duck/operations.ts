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

export function getSearchedBeers(
  name: string,
  filterType: string,
  filterValue: number
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const response = await fetch(
        `${URL}/?beer_name=${name}&${filterType}=${filterValue}`
      )
      const beers = await response.json()

      dispatch(successReceiveBeer(beers))
    } catch (err) {
      dispatch(failureReceiveBeer(err))
    }
  }
}

export function getFavoriteBeers(
  favorites: number[]
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const response = await fetch(`${URL}/ids=${favorites.join('|')}`)
      const beers = await response.json()

      dispatch(successReceiveBeer(beers))
    } catch (err) {
      dispatch(failureReceiveBeer(err))
    }
  }
}
