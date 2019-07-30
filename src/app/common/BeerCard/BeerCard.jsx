import React from 'react'
import { Card, Icon } from 'antd'
import PropTypes from 'prop-types'

import defaultBeerImg from './images/beer.svg'

const { Meta } = Card

const BeerCard = ({ id, img, name, description, setFavorite }) => {
  const onFavoriteClick = () => {
    setFavorite(id)
  }

  return (
    <Card
      style={{ width: 300, heigth: 400 }}
      cover={<img alt='beerImg' src={img || defaultBeerImg} heigth={400} />}
      actions={[<Icon type='heart' onClick={onFavoriteClick} />]}
    >
      <Meta title={name} description={description} />
    </Card>
  )
}

BeerCard.defaultProps = {
  img: defaultBeerImg,
}

BeerCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  setFavorite: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
}

export default BeerCard
