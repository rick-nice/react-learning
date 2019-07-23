import React from 'react'
import { Card, Icon } from 'antd'
import PropTypes from 'prop-types'

const { Meta } = Card

const BeerCard = ({ id, img, title, setFavorite }) => {
  const onBtnClick = () => setFavorite(id)
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="beerImg" src={img} />}
      actions={<Icon type="heart" onClick={onBtnClick} />}
    >
      <Meta title={title} description="This is the description" />
    </Card>
  )
}

BeerCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setFavorite: PropTypes.func.isRequired,
}

export default BeerCard
