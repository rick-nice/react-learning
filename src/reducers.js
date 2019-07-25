import { combineReducers } from 'redux'

import favoriteReducer from './app/duck/reducers'
import beerReducer from './app/home/duck/reducers'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  beers: beerReducer,
})

export default rootReducer
