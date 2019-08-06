import { SET_FAVORITE, SET_FAVORITES } from './types'
import { saveToLS } from '../actions'
import { Dispatch } from 'redux'

export interface ISetFavorite {
  type: SET_FAVORITE
  payload: number
}

export const setFavorite = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_FAVORITE,
    payload: id,
  })
  dispatch(saveToLS('favorites'))
}

export interface ISetFavorites {
  type: SET_FAVORITES
  payload: number[]
}

export const setFavorites = (data: number[]) => ({
  type: SET_FAVORITES,
  payload: data,
})

export type Action = ISetFavorite | ISetFavorites
