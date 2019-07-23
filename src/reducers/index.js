import { combineReducers } from 'redux'
import favoriteReducer from './favorites'
import beerReducer from './beer'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  beers: beerReducer,
})

export default rootReducer
