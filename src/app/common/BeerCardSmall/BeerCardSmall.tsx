import React, { MouseEvent } from 'react'
import { Card } from 'antd'

const { Meta } = Card

interface IProps {
  id: number
  name: string
  description: string
  onCardClick: (id: number) => void
}

const BeerCardSmall = ({ id, name, description, onCardClick }: IProps) => {
  const handleCardClick = (e: MouseEvent) => {
    onCardClick(id)
  }

  return (
    <Card
      style={{ width: 300, height: 350 }}
      onClick={handleCardClick}
      hoverable={true}
    >
      <Meta title={name} description={description} />
    </Card>
  )
}

export default BeerCardSmall
