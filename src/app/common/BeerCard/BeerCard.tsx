import React from 'react'
import { Card, Icon } from 'antd'

import defaultBeerImg from './images/beer.svg'

import './BeerCard.css'

const { Meta } = Card

export interface ICardProps {
  id: number
  img?: string
  name: string
  description: string
  toggleFavorite: (id: number) => void
  onCardClick: (id: number) => void
}

const BeerCard = ({
  id,
  img,
  name,
  description,
  toggleFavorite,
  onCardClick,
}: ICardProps) => {
  const onFavoriteClick = () => {
    toggleFavorite(id)
  }

  const handleCardClick = () => {
    onCardClick(id)
  }

  return (
    <Card
      cover={
        <img
          className='beer-card-img'
          alt='beerImg'
          src={img || defaultBeerImg}
          style={{ width: 200 }}
        />
      }
      actions={[
        <Icon key={1} type='heart' onClick={onFavoriteClick} />,
        <Icon key={2} type='select' onClick={handleCardClick} />,
      ]}
    >
      <Meta title={name} description={description} />
    </Card>
  )
}

export default BeerCard
