import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Layout, List } from 'antd'

import { IBeer } from '../../types'
import { BeerInformation } from './BeerInformation'
import defaultBeerImg from '../../common/BeerCard/images/beer.svg'

const { Content } = Layout

interface IProps extends RouteComponentProps<ITParams> {
  getCurrentBeer: (id: string) => Promise<IBeer>
}
interface ITParams {
  id: string
}

const BeerPagePure = ({ match, getCurrentBeer }: IProps) => {
  const id = match.params.id.substr(1)
  const [selectedBeer, setSelectedBeer] = useState<IBeer>()

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await getCurrentBeer(id)

      setSelectedBeer(result)
    }

    fetchMyAPI()
  }, [id, getCurrentBeer])

  if (selectedBeer) {
    const { image_url: img, food_pairing, ...others } = selectedBeer!
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
          {food_pairing.map((elem, index) => (
            <List.Item key={index}>{elem}</List.Item>
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
