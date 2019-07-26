import React from 'react'
import { Layout } from 'antd'

import BeerList from './BeerListContainer'

const { Content } = Layout

const HomeComponent = () => (
  <Layout>
    <Content>
      <BeerList />
    </Content>
  </Layout>
)

export default HomeComponent
