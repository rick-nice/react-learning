import { SET_FAVORITE } from './types'

const initialState = []

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE:
      return [...state, action.payload]
    default:
      return state
  }
}
