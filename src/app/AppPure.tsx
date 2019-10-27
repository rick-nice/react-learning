import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { AnyAction, ActionCreator } from 'redux'
import { NavBar } from './common'
import { Beer, Home, Favorites } from './pages'
import { IStoreState } from './reducers'

const { Header } = Layout

interface IProps {
  loadFromLS: (key: keyof IStoreState, setter: ActionCreator<AnyAction>) => void
  setFavorites: (favorites: number[]) => AnyAction
}

const AppPure = ({ setFavorites, loadFromLS }: IProps) => {
  useEffect(() => {
    loadFromLS('favorites', setFavorites)
  }, [loadFromLS, setFavorites])
  return (
    <Router>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <NavBar />
        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beer/:id' component={Beer} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default AppPure
