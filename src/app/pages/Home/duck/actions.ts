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

export interface IRequestBeer {
  type: types.REQUEST_BEER
}

export type BeerAction =
  | ISuccessReceiveBeers
  | IFailureReceiveBeers
  | ISetSelectedBeer
  | IRequestBeer

export const successReceiveBeers = (beers: IBeer[]): ISuccessReceiveBeers => ({
  type: types.RECEIVE_BEER_SUCCESS,
  payload: beers,
})

export const failureReceiveBeers = (err: object): IFailureReceiveBeers => ({
  type: types.RECEIVE_BEER_FAILURE,
  payload: err,
  error: true,
})

export const setSelectedBeer = (beer: IBeer): ISetSelectedBeer => ({
  type: types.SET_SELECTED_BEER,
  payload: beer,
})

export const requestBeer = (): IRequestBeer => ({
  type: types.REQUEST_BEER,
})
