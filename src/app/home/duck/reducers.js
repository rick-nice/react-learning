import * as TYPES from './types'

const initialState = { beers: [] }

export default function beerReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SUCCESS_RECEIVE_BEER:
      return { ...state, beers: action.payload }
    default:
      return state
  }
}
