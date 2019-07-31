import * as types from './types'
import { IBeer } from '../../../types'
import { Action } from './actions'

export interface IBeerState {
  list: IBeer[]
}

const initialState = { list: [] }

export function beerReducer(
  state: IBeerState = initialState,
  action: Action
): IBeerState {
  switch (action.type) {
    case types.RECEIVE_BEER_SUCCESS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
