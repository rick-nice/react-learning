import React from 'react'
import { Layout } from 'antd'

import Navbar from './common/NavbarContainer'
import BeerList from './home/BeerListContainer'

const { Content } = Layout

const App = () => (
  <Layout>
    <Navbar />
    <Content>
      <BeerList />
    </Content>
  </Layout>
)

export default App
