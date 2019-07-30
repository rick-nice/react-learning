import * as types from './types'

export interface SuccessReceiveBeer {
  type: types.RECEIVE_BEER_SUCCESS
  payload: Array<object>
}

export interface FailureReceiveBeer {
  type: types.RECEIVE_BEER_FAILURE
  payload: object
  error: boolean
}

export type Action = SuccessReceiveBeer | FailureReceiveBeer

export const successReceiveBeer = (
  beers: Array<object>
): SuccessReceiveBeer => ({
  type: types.RECEIVE_BEER_SUCCESS,
  payload: beers,
})

export const failureReceiveBeer = (err: object): FailureReceiveBeer => ({
  type: types.RECEIVE_BEER_FAILURE,
  payload: err,
  error: true,
})
