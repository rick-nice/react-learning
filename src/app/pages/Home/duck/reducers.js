import * as types from './types'

const initialState = { list: [] }

export default function beerReducer(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_BEER_SUCCESS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
