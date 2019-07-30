import { SET_FAVORITE } from './types'

const setFavorite = (id) => ({
  type: SET_FAVORITE,
  payload: id,
})

export default setFavorite
