import * as types from './types'
import { SuccessReceiveBeer } from './actions'

const initialState = { list: [] }

export default function beerReducer(
  state: types.StoreState = initialState,
  action: SuccessReceiveBeer
): types.StoreState {
  switch (action.type) {
    case types.RECEIVE_BEER_SUCCESS:
      return { ...state, list: action.payload }
    default:
      return state
  }
}
