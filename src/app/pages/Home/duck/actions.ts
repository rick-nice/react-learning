import * as types from './types'
import { IBeer } from '../../../types'

export interface ISuccessReceiveBeer {
  type: types.RECEIVE_BEER_SUCCESS
  payload: IBeer[]
}

export interface IFailureReceiveBeer {
  type: types.RECEIVE_BEER_FAILURE
  payload: object
  error: boolean
}

export type BeerAction = ISuccessReceiveBeer | IFailureReceiveBeer

export const successReceiveBeer = (beers: IBeer[]): ISuccessReceiveBeer => ({
  type: types.RECEIVE_BEER_SUCCESS,
  payload: beers,
})

export const failureReceiveBeer = (err: object): IFailureReceiveBeer => ({
  type: types.RECEIVE_BEER_FAILURE,
  payload: err,
  error: true,
})
