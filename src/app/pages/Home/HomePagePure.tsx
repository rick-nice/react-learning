import React from 'react'
import { Layout } from 'antd'

import { IBeerShort } from '../../types'
import { BeerList } from '../../common'
import { SearchBar } from './SearchBar'

const { Content } = Layout

interface IProps {
  beers: IList
  setFavorite: (id: number) => void
  getSearchedBeers: (
    name: string,
    filterType: string,
    filterValue: number
  ) => void
}

interface IList {
  list: IBeerShort[]
}

const HomePage = ({ beers, setFavorite, getSearchedBeers }: IProps) => (
  <Content>
    <SearchBar getSearchedBeers={getSearchedBeers} />
    <BeerList beers={beers} setFavorite={setFavorite} />
  </Content>
)

export default HomePage
