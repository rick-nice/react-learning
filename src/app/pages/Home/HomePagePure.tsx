import React from 'react'
import { Layout } from 'antd'

import { IBeerListProps } from '../../common/BeerList/BeerList'
import { ICardProps } from '../../common/BeerCard/BeerCard'
import { ISearchProps } from './SearchBar/SearchBar'
import { BeerList, BeerCard } from '../../common'
import { SearchBar } from './SearchBar'

const { Content } = Layout

type HomeProps = IBeerListProps & ISearchProps

const HomePage = ({ beers, toggleFavorite, loadSearchedBeers }: HomeProps) => {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <SearchBar loadSearchedBeers={loadSearchedBeers} />
      <BeerList beers={beers} toggleFavorite={toggleFavorite}>
        {(arg: ICardProps) => <BeerCard {...arg} />}
      </BeerList>
    </Content>
  )
}

export default HomePage
