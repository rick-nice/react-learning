import React from 'react'
import { List } from 'antd'
import { ListGridType } from 'antd/lib/list'
import { withRouter, RouteComponentProps } from 'react-router'

import { IBeerShort } from '../../types'
import { ICardProps } from '../BeerCard/BeerCard'

export interface IBeerListProps extends RouteComponentProps {
  beers: IList
  toggleFavorite: (id: number) => void
}

type RenderProp = (arg: ICardProps) => React.ReactElement<ICardProps>

interface IChildren {
  children: RenderProp
}

interface IList {
  list: IBeerShort[]
  isFetching: boolean
}

const GRID: ListGridType = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 4,
  xxl: 4,
}

const BeerList = ({
  beers: { list, isFetching },
  toggleFavorite,
  history,
  children,
}: IBeerListProps & IChildren) => {
  const onCardClick = (id: number) => history.push(`/beer/${id}`)

  return (
    <List
      grid={GRID}
      dataSource={list}
      loading={isFetching}
      renderItem={({ description, id, name, image_url: img }: IBeerShort) => (
        <List.Item key={id}>
          {children({
            id,
            name,
            description,
            img,
            toggleFavorite,
            onCardClick,
          })}
        </List.Item>
      )}
    />
  )
}

export default withRouter(BeerList)
