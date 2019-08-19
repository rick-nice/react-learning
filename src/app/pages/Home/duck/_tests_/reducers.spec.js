import { beerReducer, initialState } from '../reducers'
import * as t from '../types'

const processingState = { ...initialState, isFetching: true }

describe('beer reducer', () => {
  it('REQUEST_BEER action', () => {
    const action = {
      type: t.REQUEST_BEER,
    }

    expect(beerReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
      list: [],
    })
  })

  it('RECEIVE_BEER_SUCCESS action', () => {
    const action = {
      type: t.RECEIVE_BEER_SUCCESS,
      payload: [{ name: 'a' }, { tagline: 'b' }],
    }

    expect(beerReducer(processingState, action)).toEqual({
      ...processingState,
      isFetching: false,
      list: [{ name: 'a' }, { tagline: 'b' }],
    })
  })

  it('SET_SELECTED_BEER action', () => {
    const action = {
      type: t.SET_SELECTED_BEER,
      payload: { name: 'IPA' },
    }

    expect(beerReducer(initialState, action)).toEqual({
      ...initialState,
      selected: { name: 'IPA' },
    })
  })
})
