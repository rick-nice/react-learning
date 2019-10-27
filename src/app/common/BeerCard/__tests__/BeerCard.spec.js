import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'

import BeerCard from '../BeerCard'
import defaultBeerImg from '../images/beer.svg'

Enzyme.configure({ adapter: new Adapter() })

describe('BeerCard component', () => {
  const props = {
    id: '3',
    img: defaultBeerImg,
    name: 'beer',
    description: 'some beer',
    toggleFavorite: () => {},
    onCardClick: () => {},
  }

  it('render correctly card component', () => {
    const BeerCardComponent = renderer.create(<BeerCard {...props} />).toJSON()
    expect(BeerCardComponent).toMatchSnapshot()
  })
})
