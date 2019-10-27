import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'

import { fetchAndDispatch } from '../../../utils'
import { IStoreState } from '../../../reducers'
import {
  requestBeer,
  successReceiveBeers,
  failureReceiveBeers,
  setSelectedBeer,
} from './actions'

type ThunkResult<R> = ThunkAction<R, IStoreState, null, AnyAction>

const fetchAndDispatchBeer = fetchAndDispatch(
  requestBeer,
  successReceiveBeers,
  failureReceiveBeers
)

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

export function loadRandomBeer(): ThunkResult<void> {
  return (dispatch) => {
    return fetchAndDispatchBeer(dispatch, '/random')
  }
}

export function loadSearchedBeers(
  name: string,
  filterType: string,
  filterValue: number
): ThunkResult<void> {
  return (dispatch) => {
    fetchAndDispatchBeer(
      dispatch,
      `?beer_name=${name}&${filterType}=${filterValue}`
    )
  }
}

export function loadFavoriteBeers(favoriteIds: number[]): ThunkResult<void> {
  return (dispatch) => {
    fetchAndDispatchBeer(dispatch, `?ids=${favoriteIds.join('|')}`)
  }
}
