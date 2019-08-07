import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

import { IStoreState } from '../../../reducers'
import {
  requestBeer,
  successReceiveBeers,
  failureReceiveBeers,
  setSelectedBeer,
} from './actions'

const URL = 'https://api.punkapi.com/v2/beers'

export type ThunkResult<R> = ThunkAction<R, IStoreState, null, AnyAction>

export function selectBeer(id: string): ThunkResult<Promise<void>> {
  return async (dispatch, getState) => {
    let beers = getState().beers.list
    const selectedBeer = beers.find((beer) => beer.id === Number(id))

    if (!selectedBeer) {
      const response = await fetch(`${URL}/${id}`)
      beers = await response.json()

      dispatch(setSelectedBeer(beers[0]))
    } else {
      dispatch(setSelectedBeer(selectedBeer))
    }
  }
}

export function getRandomBeer(): ThunkResult<Promise<void>> {
  return async (dispatch) => {
    try {
      dispatch(requestBeer())
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
): ThunkResult<Promise<void>> {
  return async (dispatch) => {
    try {
      dispatch(requestBeer())
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
): ThunkResult<Promise<void>> {
  return async (dispatch) => {
    try {
      dispatch(requestBeer)
      const response = await fetch(`${URL}/ids=${favoriteIds.join('|')}`)
      const beers = await response.json()

      dispatch(successReceiveBeers(beers))
    } catch (err) {
      dispatch(failureReceiveBeers(err))
    }
  }
}
