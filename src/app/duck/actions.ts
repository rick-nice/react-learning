import { SET_FAVORITE } from './types'

export interface ISetFavorite {
  type: SET_FAVORITE
  payload: number
}

export const setFavorite = (id: number): ISetFavorite => ({
  type: SET_FAVORITE,
  payload: id,
})

export type Action = ISetFavorite
