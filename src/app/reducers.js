import { combineReducers } from 'redux'

import { favoriteReducer } from './duck'
import { beerReducer } from './pages/Home/duck'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  beers: beerReducer,
})

export default rootReducer
