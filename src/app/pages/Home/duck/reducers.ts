import * as types from './types'
import { IBeer } from '../../../types'
import { BeerAction } from './actions'

export interface IBeerState {
  list: IBeer[]
}

const initialState = { list: [] }

export function beerReducer(
  state: IBeerState = initialState,
  action: BeerAction
): IBeerState {
  switch (action.type) {
    case types.RECEIVE_BEER_SUCCESS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
