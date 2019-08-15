import { SET_FAVORITE, UNSET_FAVORITE, SET_FAVORITES } from './types'

export interface ISetFavorite {
  type: SET_FAVORITE
  payload: number
}

export interface IUnsetFavorite {
  type: UNSET_FAVORITE
  payload: number
}

export interface ISetFavorites {
  type: SET_FAVORITES
  payload: number[]
}

export type Action = ISetFavorite | IUnsetFavorite | ISetFavorites

export const setFavorite = (id: number) => ({
  type: SET_FAVORITE,
  payload: id,
})

export const unsetFavorite = (id: number) => ({
  type: UNSET_FAVORITE,
  payload: id,
})

export const setFavorites = (data: number[]) => ({
  type: SET_FAVORITES,
  payload: data,
})
