import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'

import BeerCard from '../common/BeerCard'

const BeerListComponent = ({ beerList, setFavorite }) => (
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
    dataSource={beerList.beers}
    renderItem={({ description, id, name, image_url: img }) => (
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

BeerListComponent.propTypes = {
  beerList: PropTypes.shape({
    beers: PropTypes.array.isRequired,
  }).isRequired,
  setFavorite: PropTypes.func.isRequired,
}

export default BeerListComponent
