import * as types from './types'
import { IBeer } from '../../../types'
import { BeerAction } from './actions'

export interface IBeerState {
  list: IBeer[]
  isFetching: boolean
  selected?: IBeer
}

const initialState = { list: [], isFetching: false }

export function beerReducer(
  state: IBeerState = initialState,
  action: BeerAction
): IBeerState {
  switch (action.type) {
    case types.RECEIVE_BEER_SUCCESS:
      return { ...state, list: action.payload, isFetching: false }
    case types.SET_SELECTED_BEER:
      return { ...state, selected: action.payload }
    case types.REQUEST_BEER:
      return { ...state, isFetching: true }
    default:
      return state
  }
}
