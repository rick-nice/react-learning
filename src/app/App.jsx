import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import { NavBar } from './common'
import { Home } from './pages'

const { Header } = Layout

const App = () => (
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

export default App
