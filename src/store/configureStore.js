import { createStore, applyMiddleware } from 'redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
