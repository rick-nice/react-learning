import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { successReceiveBeers, failureReceiveBeers } from './actions'

const URL = 'https://api.punkapi.com/v2/beers'

export function getRandomBeer(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const response = await fetch(`${URL}/random`)
      const beers = await response.json()

      dispatch(successReceiveBeers(beers))
    } catch (err) {
      dispatch(failureReceiveBeers(err))
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

      dispatch(successReceiveBeers(beers))
    } catch (err) {
      dispatch(failureReceiveBeers(err))
    }
  }
}

export function getFavoriteBeers(
  favoriteIds: number[]
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const response = await fetch(`${URL}/ids=${favoriteIds.join('|')}`)
      const beers = await response.json()

      dispatch(successReceiveBeers(beers))
    } catch (err) {
      dispatch(failureReceiveBeers(err))
    }
  }
}
