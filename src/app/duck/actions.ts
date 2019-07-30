import { SET_FAVORITE } from './types'

export interface SetFavorite {
  type: SET_FAVORITE
  payload: number
}

const setFavorite = (id: number): SetFavorite => ({
  type: SET_FAVORITE,
  payload: id,
})

export default setFavorite
