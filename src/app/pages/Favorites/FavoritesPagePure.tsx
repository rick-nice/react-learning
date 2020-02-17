import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'

import { IStoreState } from '../../reducers'
import { BeerCard, BeerList } from '../../common'
import { ICardProps } from '../../common/BeerCard/BeerCard'

const { Content } = Layout

interface IDispatchProps {
  requestBeer: (url: string) => void
  toggleFavorite: (id: number) => void
}

type Props = IStoreState & IDispatchProps

const FavoritesPagePure = ({
  favorites,
  beers,
  requestBeer,
  toggleFavorite,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    requestBeer(`?ids=${[...favorites].join('|')}`)
    setIsLoaded(true)
  }, [favorites, requestBeer])

  return isLoaded ? (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <BeerList beers={beers} toggleFavorite={toggleFavorite}>
        {(arg: ICardProps) => <BeerCard {...arg} />}
      </BeerList>
    </Content>
  ) : (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>loading...</Content>
  )
}

export default FavoritesPagePure
