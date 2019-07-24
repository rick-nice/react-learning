const initialState = {
  beers: [],
  id: 'random',
  isFetching: false,
}
export default function beerReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BEER_REQUEST':
      return { ...state, id: action.payload, isFetching: true }
    case 'GET_BEER_SUCCESS':
      return { ...state, beers: action.payload, isFetching: false }
    default:
      return state
  }
}
