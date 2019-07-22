import { combineReducers } from 'redux'
import favoriteReducer from './favorites'
import beerReducer from './beer'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  beer: beerReducer,
})

export default rootReducer
