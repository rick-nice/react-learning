import { takeEvery, select, call, all } from 'redux-saga/effects'
import { ISaveToLS, ILoadFromLS, LOAD_FROM_LS, SAVE_TO_LS } from './actions'
import { IStoreState } from './reducers'
import { beerSaga } from './pages/Home/duck'
import { favoriteSaga } from './pages/Favorites/duck'

const getSpecificState = (key: keyof IStoreState) => (state: IStoreState) =>
  state[key]

function* saveToLS(action: ISaveToLS) {
  const data = yield select(getSpecificState(action.key))

  yield localStorage.setItem(action.key, JSON.stringify([...data]))
}

function* loadFromLS(action: ILoadFromLS) {
  const data = yield localStorage.getItem(action.key)

  if (data) {
    yield call(action.setter, data)
  }
}

function* rootWatcherSaga() {
  yield takeEvery(LOAD_FROM_LS, loadFromLS)
  yield takeEvery(SAVE_TO_LS, saveToLS)
}

export default function* rootSaga() {
  yield all([rootWatcherSaga(), beerSaga(), favoriteSaga()])
}
