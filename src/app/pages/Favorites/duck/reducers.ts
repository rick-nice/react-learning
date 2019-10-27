import * as types from './types'
import { Action } from './actions'

const initialState: Set<number> = new Set()

export default function favoriteReducer(
  state: Set<number> = initialState,
  action: Action
): Set<number> {
  switch (action.type) {
    case types.SET_FAVORITE:
      return new Set(state).add(action.payload)
    case types.UNSET_FAVORITE:
      // eslint-disable-next-line no-case-declarations
      const newState = new Set(state)
      newState.delete(action.payload)
      return newState
    case types.SET_FAVORITES:
      return new Set(action.payload)
    default:
      return state
  }
}
