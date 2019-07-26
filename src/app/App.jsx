import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './common/NavbarContainer'
import HomeComponent from './home/HomeComponent'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={HomeComponent} />
    </Switch>
  </Router>
)

export default App
