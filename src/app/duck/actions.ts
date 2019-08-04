import { SET_FAVORITE, GET_DATA } from './types'

export interface ISetFavorite {
  type: SET_FAVORITE
  payload: number
}

export const setFavorite = (id: number): ISetFavorite => ({
  type: SET_FAVORITE,
  payload: id,
})

export interface IGetData {
  type: GET_DATA
  payload: number[]
}

export const getData = (data: number[]) => ({
  type: GET_DATA,
  payload: data,
})

export type Action = ISetFavorite | IGetData
