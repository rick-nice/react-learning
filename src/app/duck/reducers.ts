import { SET_FAVORITE } from './types'
import { Action } from './actions'

const initialState: number[] = []

export default function favoriteReducer(
  state: number[] = initialState,
  action: Action
): number[] {
  switch (action.type) {
    case SET_FAVORITE:
      return [...state, action.payload]
    default:
      return state
  }
}
