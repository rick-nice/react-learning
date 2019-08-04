import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { NavBar } from './common'
import { Home } from './pages'
import { types } from './duck'

const { Header } = Layout

interface IProps {
  loadFromLS: (key: string, loadType: string) => void
  favorites: Set<number>
}

const AppPure = ({ loadFromLS, favorites }: IProps) => {
  if (favorites.size === 0) {
    loadFromLS('favorites', types.GET_DATA)
  }
  return (
    <Router>
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default AppPure
