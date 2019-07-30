import React from 'react'
import { List } from 'antd'

import { BeerCard } from '..'

interface Props {
  beers: any
  setFavorite: (id: number) => void
}

interface ListProps {
  id: number
  name: string
  description: string
  image_url?: string
}

const BeerListPure = ({ beers, setFavorite }: Props) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={beers.list}
    renderItem={({ description, id, name, image_url: img }: ListProps) => (
      <List.Item key={id}>
        <BeerCard
          description={description}
          name={name}
          img={img}
          setFavorite={setFavorite}
          id={id}
        />
      </List.Item>
    )}
  />
)

export default BeerListPure
