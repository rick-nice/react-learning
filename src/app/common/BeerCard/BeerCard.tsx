import React from 'react'
import { Card, Icon } from 'antd'

import defaultBeerImg from './images/beer.svg'

const { Meta } = Card

interface IProps {
  id: number
  img?: string
  name: string
  description: string
  setFavorite: (id: number) => void
}

const BeerCard = ({ id, img, name, description, setFavorite }: IProps) => {
  const onFavoriteClick = () => {
    setFavorite(id)
  }

  return (
    <Card
      style={{ width: 300, height: 450 }}
      cover={
        <img
          alt='beerImg'
          src={img || defaultBeerImg}
          style={{ width: 200, height: 400 }}
        />
      }
      actions={[<Icon key={1} type='heart' onClick={onFavoriteClick} />]}
    >
      <Meta title={name} description={description} />
    </Card>
  )
}

export default BeerCard
