import { put, call, select, takeEvery } from 'redux-saga/effects'

import { IStoreState } from '../../../reducers'
import { IBeer } from '../../../types'
import { URL } from '../../../utils'
import {
  setSelectedBeer,
  IRequestBeer,
  successReceiveBeers,
  failureReceiveBeers,
} from './actions'
import { types } from '.'

const getBeers = ({ beers }: IStoreState): IBeer[] => beers.list

function* selectBeer({ payload }: IRequestBeer) {
  let beers: IBeer[] = yield select(getBeers)
  const selectedBeer = beers.find((beer) => beer.id === Number(payload))
  if (!selectedBeer) {
    const response = yield call(fetch, `${URL}/${payload}`)
    beers = yield response.json()

    put(setSelectedBeer(beers[0]))
  } else {
    put(setSelectedBeer(selectedBeer))
  }
}

function* fetchBeer({ payload }: IRequestBeer) {
  try {
    const data = yield call(fetch, `${URL}${payload}`)
    const beers = yield data.json()

    yield put(successReceiveBeers(beers))
  } catch (error) {
    yield put(failureReceiveBeers(error))
  }
}

export default function* beerSaga() {
  yield takeEvery(types.REQUEST_BEER, fetchBeer)
  yield takeEvery(types.SELECT_BEER, selectBeer)
}
