import React from 'react'
import { List } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router'

import { IBeerShort } from '../../types'
import BeerCard from '../BeerCard'

export interface IBeerListProps extends RouteComponentProps {
  beers: IList
  setFavorite: (id: number) => void
}

interface IList {
  list: IBeerShort[]
}

const BeerList = ({ beers, setFavorite, history }: IBeerListProps) => {
  const onCardClick = (id: number) => history.push(`/beer/:${id}`)

  return (
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
      renderItem={({ description, id, name, image_url: img }: IBeerShort) => (
        <List.Item key={id}>
          <BeerCard
            description={description}
            name={name}
            img={img}
            setFavorite={setFavorite}
            id={id}
            onCardClick={onCardClick}
          />
        </List.Item>
      )}
    />
  )
}

export default withRouter(BeerList)
