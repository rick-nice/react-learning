import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { requestBeer, successReceiveBeers } from '../actions'
import { loadRandomBeer } from '../operations'

const URL = 'https://api.punkapi.com/v2/beers'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('dispatch REQUEST_BEER and RECEIVE_BEER_SUCCESS on async action', () => {
    fetchMock.getOnce(`${URL}/random`, {
      headers: { 'content-type': 'application-json' },
      body: [{ name: 'aaa' }],
    })

    const expectedActions = [
      requestBeer(),
      successReceiveBeers([{ name: 'aaa' }]),
    ]
    const store = mockStore({})

    return store.dispatch(loadRandomBeer()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
