export const successReceiveBeer = (beers) => ({
  type: 'SUCCESS_RECEIVE_BEER',
  payload: beers,
})

export const failureReceiveBeer = (err) => ({
  type: 'GET_BEER_FAILURE',
  payload: err,
  error: true,
})
