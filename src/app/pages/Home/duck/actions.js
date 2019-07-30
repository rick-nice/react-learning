import * as types from './types'

export const successReceiveBeer = (beers) => ({
  type: types.RECEIVE_BEER_SUCCESS,
  payload: beers,
})

export const failureReceiveBeer = (err) => ({
  type: types.RECEIVE_BEER_FAILURE,
  payload: err,
  error: true,
})
