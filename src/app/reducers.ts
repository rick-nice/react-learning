import { combineReducers } from 'redux'

import { favoriteReducer } from './duck'
import { beerReducer, types } from './pages/Home/duck'

export interface StoreState {
  favorites: Array<number>
  beers: types.StoreState
}

const rootReducer = combineReducers<StoreState>({
  favorites: favoriteReducer,
  beers: beerReducer,
})

export default rootReducer
