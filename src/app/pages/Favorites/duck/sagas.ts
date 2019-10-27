import { select, put, takeEvery } from 'redux-saga/effects'
import { IStoreState } from '../../../reducers'
import { setFavorite, unsetFavorite, IToggleFavorite } from './actions'
import { saveToLS } from '../../../actions'
import { types } from '.'

const getFavorites = ({ favorites }: IStoreState) => favorites

function* toggleFavorite({ payload }: IToggleFavorite) {
  const favoriteIDs = yield select(getFavorites)

  if (favoriteIDs.has(payload)) {
    yield put(unsetFavorite(payload))
  } else {
    yield put(setFavorite(payload))
  }
  yield put(saveToLS('favorites'))
}

export default function* favoriteSaga() {
  yield takeEvery(types.TOGGLE_FAVORITE, toggleFavorite)
}
