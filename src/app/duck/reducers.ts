import { SET_FAVORITE } from './types'
import { SetFavorite } from './actions'

const initialState: Array<number> = []

export default function favoriteReducer(
  state: Array<number> = initialState,
  action: SetFavorite
): Array<number> {
  switch (action.type) {
    case SET_FAVORITE:
      return [...state, action.payload]
    default:
      return state
  }
}
