import React from 'react'
import { Card, Icon } from 'antd'

import defaultBeerImg from './images/beer.svg'

const { Meta } = Card

export interface Props {
  id: number
  img?: string
  name: string
  description: string
  setFavorite: (id: number) => void
}

const BeerCard = ({ id, img, name, description, setFavorite }: Props) => {
  const onFavoriteClick = () => {
    setFavorite(id)
  }

  return (
    <Card
      style={{ width: 300, height: 400 }}
      cover={<img alt='beerImg' src={img || defaultBeerImg} height={400} />}
      actions={[<Icon type='heart' onClick={onFavoriteClick} />]}
    >
      <Meta title={name} description={description} />
    </Card>
  )
}

export default BeerCard
