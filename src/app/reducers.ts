import { combineReducers } from 'redux'

import { favoriteReducer } from './pages/Favorites/duck'
import { reducers } from './pages/Home/duck'

export interface IStoreState {
  favorites: Set<number>
  beers: reducers.IBeerState
}

const rootReducer = combineReducers<IStoreState>({
  beers: reducers.beerReducer,
  favorites: favoriteReducer,
})

export default rootReducer
