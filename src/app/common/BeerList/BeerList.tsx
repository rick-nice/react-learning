import React from 'react'
import { List } from 'antd'
import { ListGridType } from 'antd/lib/list'
import { withRouter, RouteComponentProps } from 'react-router'

import { IBeerShort } from '../../types'

export interface IBeerListProps extends RouteComponentProps {
  beers: IList
  setFavorite: (id: number) => void
}

type RenderProp = (arg: IRenderPropArg) => React.ReactElement<any>

export interface IRenderPropArg {
  id: number
  name: string
  description: string
  img: string
  setFavorite: (id: number) => void
  onCardClick: (id: number) => void
}

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
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 3,
}

const BeerList = ({
  beers: { list, isFetching },
  setFavorite,
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
          {children({ id, name, description, img, setFavorite, onCardClick })}
        </List.Item>
      )}
    />
  )
}

export default withRouter(BeerList)
