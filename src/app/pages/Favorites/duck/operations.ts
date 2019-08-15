import { ThunkAction } from 'redux-thunk'
import { AnyAction, Dispatch } from 'redux'

import { IStoreState } from '../../../reducers'
import { setFavorite, unsetFavorite } from './actions'
import { saveToLS } from '../../../actions'

type ThunkResult<R> = ThunkAction<R, IStoreState, null, AnyAction>

const setFavoriteAndSave = (dispatch: Dispatch, id: number) => {
  dispatch(setFavorite(id))
  dispatch(saveToLS('favorites'))
}

const unsetFavoriteAndSave = (dispatch: Dispatch, id: number) => {
  dispatch(unsetFavorite(id))
  dispatch(saveToLS('favorites'))
}

export function toggleFavorite(id: number): ThunkResult<void> {
  return (dispatch, getState) => {
    const favoriteIDs = getState().favorites

    if (favoriteIDs.has(id)) {
      unsetFavoriteAndSave(dispatch, id)
    } else {
      setFavoriteAndSave(dispatch, id)
    }
  }
}
