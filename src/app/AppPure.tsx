import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { NavBar } from './common'
import { Beer, Home } from './pages'

const { Header } = Layout

interface IProps {
  loadFromLS: (key: string) => any
  setFavorites: (favorites: number[]) => void
}

const AppPure = ({ setFavorites, loadFromLS }: IProps) => {
  useEffect(() => {
    const data: number[] = loadFromLS('favorites')

    setFavorites(data)
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
        </Switch>
      </Layout>
    </Router>
  )
}

export default AppPure
