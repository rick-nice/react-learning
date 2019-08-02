import { SET_FAVORITE } from './types'
import { Action } from './actions'

const favorites = localStorage.getItem('favorites')

const initialState: Set<number> = favorites
  ? new Set(JSON.parse(favorites))
  : new Set()

export default function favoriteReducer(
  state: Set<number> = initialState,
  action: Action
): Set<number> {
  switch (action.type) {
    case SET_FAVORITE:
      const newState = new Set(state)
      return newState.add(action.payload)
    default:
      return state
  }
}
