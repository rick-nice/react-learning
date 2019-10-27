import * as t from './types'

export interface ISetFavorite {
  type: t.SET_FAVORITE
  payload: number
}

export interface IToggleFavorite {
  type: t.TOGGLE_FAVORITE
  payload: number
}

export interface IUnsetFavorite {
  type: t.UNSET_FAVORITE
  payload: number
}

export interface ISetFavorites {
  type: t.SET_FAVORITES
  payload: number[]
}

export type Action = ISetFavorite | IUnsetFavorite | ISetFavorites

export const setFavorite = (id: number) => ({
  type: t.SET_FAVORITE,
  payload: id,
})

export const unsetFavorite = (id: number) => ({
  type: t.UNSET_FAVORITE,
  payload: id,
})

export const setFavorites = (data: number[]) => ({
  type: t.SET_FAVORITES,
  payload: data,
})

export const toggleFavorite = (id: number) => ({
  type: t.TOGGLE_FAVORITE,
  payload: id,
})
