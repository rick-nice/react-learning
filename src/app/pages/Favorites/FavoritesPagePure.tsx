import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'

import { IStoreState } from '../../reducers'
import { BeerCard, BeerList } from '../../common'
import { ICardProps } from '../../common/BeerCard/BeerCard'

const { Content } = Layout

interface IDispatchProps {
  loadFavoriteBeers: (favoriteIds: number[]) => void
  toggleFavorite: (id: number) => void
}

type IProps = IStoreState & IDispatchProps

const FavoritesPagePure = ({
  favorites,
  beers,
  loadFavoriteBeers,
  toggleFavorite,
}: IProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    loadFavoriteBeers([...favorites])
    setIsLoaded(true)
  }, [loadFavoriteBeers, favorites])

  if (isLoaded) {
    return (
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <BeerList beers={beers} toggleFavorite={toggleFavorite}>
          {(arg: ICardProps) => <BeerCard {...arg} />}
        </BeerList>
      </Content>
    )
  }
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>loading...</Content>
  )
}

export default FavoritesPagePure
