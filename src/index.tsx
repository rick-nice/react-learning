import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker'

import App from './app/App'
import rootReducer from './app/reducers'
import { favoritesToLS } from './app/middlewares'

import './index.css'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, favoritesToLS, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
