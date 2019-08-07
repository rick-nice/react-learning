import * as types from './types'
import { IBeer } from '../../../types'

export interface ISuccessReceiveBeers {
  type: types.RECEIVE_BEER_SUCCESS
  payload: IBeer[]
}

export interface IFailureReceiveBeers {
  type: types.RECEIVE_BEER_FAILURE
  payload: object
  error: boolean
}

export interface ISetSelectedBeer {
  type: types.SET_SELECTED_BEER
  payload: IBeer
}

export type BeerAction =
  | ISuccessReceiveBeers
  | IFailureReceiveBeers
  | ISetSelectedBeer

export const successReceiveBeers = (beers: IBeer[]): ISuccessReceiveBeers => ({
  type: types.RECEIVE_BEER_SUCCESS,
  payload: beers,
})

export const failureReceiveBeers = (err: object): IFailureReceiveBeers => ({
  type: types.RECEIVE_BEER_FAILURE,
  payload: err,
  error: true,
})

export const setSelectedBeer = (beer: IBeer) => ({
  type: types.SET_SELECTED_BEER,
  payload: beer,
})
