import React from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'

import BeerCard from './BeerCard'
import loadingImg from '../images/beer.svg'

const BeerList = ({ beers, setFavorite }) => (
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
    dataSource={beers}
    renderItem={(item) => (
      <List.Item>
        <BeerCard
          description={item.description}
          title={item.title}
          img={item.img}
          setFavorite={setFavorite}
          id={item.id}
        />
      </List.Item>
    )}
  />
)

BeerList.defaultProps = {
  beers: [
    { title: 'Loading', img: loadingImg, id: 'random', description: 'loading' },
  ],
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
  setFavorite: PropTypes.func.isRequired,
}

export default BeerList
