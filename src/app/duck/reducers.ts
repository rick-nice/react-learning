import { SET_FAVORITE, GET_DATA } from './types'
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
    case GET_DATA:
      return new Set(action.payload)
    default:
      return state
  }
}
