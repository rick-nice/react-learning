import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Layout, List } from 'antd'

import { IBeer } from '../../types'
import { BeerInformation } from './BeerInformation'
import defaultBeerImg from '../../common/BeerCard/images/beer.svg'

const { Content } = Layout

interface IProps extends RouteComponentProps<ITParams> {
  selectBeer: (id: string) => void
  selected?: IBeer
}
interface ITParams {
  id: string
}

const BeerPagePure = ({ match: { params }, selected, selectBeer }: IProps) => {
  const { id } = params

  useEffect(() => {
    selectBeer(id)
  }, [id, selectBeer])

  if (selected) {
    const { image_url: img, food_pairing: food, ...others } = selected
    return (
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className='beer-information'>
          <img
            alt='beerImg'
            src={img || defaultBeerImg}
            style={{ width: 300, height: 700 }}
          />
          <BeerInformation {...others} />
        </div>
        <List>
          {food.map((elem) => (
            <List.Item key={elem}>{elem}</List.Item>
          ))}
        </List>
      </Content>
    )
  }

  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>loading...</Content>
  )
}

export default BeerPagePure
