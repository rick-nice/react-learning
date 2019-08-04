import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

import { LOAD_FROM_LS, SAVE_TO_LS } from '../../actions'

const dataToLS: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (
  next: Dispatch
) => (action) => {
  if (action.type === LOAD_FROM_LS) {
    const data = localStorage.getItem(action.key)
    return dispatch({
      type: action.loadType,
      payload: data ? JSON.parse(data) : [],
    })
  }
  if (action.type === SAVE_TO_LS) {
    localStorage.setItem(action.key, JSON.stringify([getState()[action.key]]))
  }

  next(action)
}

export default dataToLS
