import { combineReducers } from 'redux'
import favoriteReducer from './favorites'
import beerReducer from './beerList'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  beerList: beerReducer,
})

export default rootReducer
