import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'

import BeerCard from './BeerCard'

const BeerList = ({ data, setFavorite }) => (
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
    dataSource={data.beers}
    renderItem={(item) => (
      <List.Item>
        <BeerCard
          description={item.description}
          title={item.name}
          img={item.image_url}
          setFavorite={setFavorite}
          id={item.id}
        />
      </List.Item>
    )}
  />
)

BeerList.propTypes = {
  data: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired,
  }).isRequired,
  setFavorite: PropTypes.func.isRequired,
}

export default BeerList
