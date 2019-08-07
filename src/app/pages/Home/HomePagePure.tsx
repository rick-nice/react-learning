import React from 'react'
import { Layout } from 'antd'

import { IBeerListProps } from '../../common/BeerList/BeerList'
import { ISearchProps } from './SearchBar/SearchBar'
import { BeerList } from '../../common'
import { SearchBar } from './SearchBar'

const { Content } = Layout

type HomeProps = IBeerListProps & ISearchProps

const HomePage = ({ beers, setFavorite, getSearchedBeers }: HomeProps) => {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <SearchBar getSearchedBeers={getSearchedBeers} />
      <BeerList beers={beers} setFavorite={setFavorite} />
    </Content>
  )
}

export default HomePage
