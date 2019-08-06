import React from 'react'
import { Typography, Descriptions } from 'antd'

const { Title } = Typography

interface IProps {
  name: string
  tagline: string
  description: string
  abv: number
  ibu: number
  first_brewed: string
}

const BeerInformation = ({ name, tagline, description, abv, ibu }: IProps) => (
  <div>
    <Title>{name}</Title>
    <Title level={3}>{tagline}</Title>
    <Descriptions>
      <Descriptions.Item label='Descrition: '>{description}</Descriptions.Item>
      <Descriptions.Item label='ABV: '>{abv}</Descriptions.Item>
      <Descriptions.Item label='IBU: '>{ibu}</Descriptions.Item>
    </Descriptions>
  </div>
)

export default BeerInformation
