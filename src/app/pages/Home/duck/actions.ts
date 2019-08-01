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

export type BeerAction = ISuccessReceiveBeers | IFailureReceiveBeers

export const successReceiveBeers = (beers: IBeer[]): ISuccessReceiveBeers => ({
  type: types.RECEIVE_BEER_SUCCESS,
  payload: beers,
})

export const failureReceiveBeers = (err: object): IFailureReceiveBeers => ({
  type: types.RECEIVE_BEER_FAILURE,
  payload: err,
  error: true,
})
