import React from 'react'
import { Layout } from 'antd'

import BeerList from '../../common/BeerList'

const { Content } = Layout

const HomePage = () => (
  <Content>
    <BeerList />
  </Content>
)

export default HomePage
