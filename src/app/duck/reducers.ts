import { SET_FAVORITE, SET_FAVORITES } from './types'
import { Action } from './actions'

const initialState: Set<number> = new Set()

export default function favoriteReducer(
  state: Set<number> = initialState,
  action: Action
): Set<number> {
  switch (action.type) {
    case SET_FAVORITE:
      const newState = new Set(state)
      return newState.add(action.payload)
    case SET_FAVORITES:
      return new Set(action.payload)
    default:
      return state
  }
}
