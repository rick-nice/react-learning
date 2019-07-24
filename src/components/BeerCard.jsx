import React from 'react'
import { Card, Icon } from 'antd'
import PropTypes from 'prop-types'

const { Meta } = Card

const BeerCard = ({ id, img, title, description, setFavorite }) => {
  const onBtnClick = () => setFavorite(id)
  return (
    <Card
      style={{ width: 300, heigth: 400 }}
      cover={<img alt="beerImg" src={img} heigth={400} />}
      actions={[<Icon type="heart" onClick={onBtnClick} />]}
    >
      <Meta title={title} description={description} />
    </Card>
  )
}

BeerCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setFavorite: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
}

export default BeerCard
