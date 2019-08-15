import * as types from './types'
import favoriteReducer from './reducers'
import { setFavorites } from './actions'
import { toggleFavorite } from './operations'

const actions = { setFavorites, toggleFavorite }

export { types, favoriteReducer, actions }
