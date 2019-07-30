export const RECEIVE_BEER_SUCCESS = 'RECEIVE_BEER_SUCCESS'
export type RECEIVE_BEER_SUCCESS = typeof RECEIVE_BEER_SUCCESS

export const RECEIVE_BEER_FAILURE = 'RECEIVE_BEER_FAILURE'
export type RECEIVE_BEER_FAILURE = typeof RECEIVE_BEER_FAILURE

export interface StoreState {
  list: Array<object>
}
