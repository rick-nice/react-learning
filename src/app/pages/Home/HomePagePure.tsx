import React, { useState } from 'react'
import { Layout } from 'antd'

import { IBeerListProps } from '../../common/BeerList/BeerList'
import { ISearchProps } from './SearchBar/SearchBar'
import { BeerList } from '../../common'
import { SearchBar } from './SearchBar'

const { Content } = Layout

type HomeProps = IBeerListProps & ISearchProps

const HomePage = ({ beers, setFavorite, getSearchedBeers }: HomeProps) => {
  const [isListEmpty, setIsListEmpty] = useState(true)
  return (
    <Content>
      <SearchBar
        getSearchedBeers={getSearchedBeers}
        setIsListEmpty={setIsListEmpty}
      />
      {!isListEmpty && <BeerList beers={beers} setFavorite={setFavorite} />}
    </Content>
  )
}

export default HomePage
