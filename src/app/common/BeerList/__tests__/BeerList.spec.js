import React from 'react'
import Enzyme, { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router'

import BeerList from '../BeerList'

Enzyme.configure({ adapter: new Adapter() })

describe('BeerList component', () => {
  const props = {
    beers: {
      list: [],
      isFetching: false,
    },
    history: {
      id: '',
    },
    toggleFavorite: () => {},
    children: () => {},
  }

  it('render correctly BeerList component', () => {
    const BeerListComponent = renderer
      .create(
        <MemoryRouter>
          <BeerList {...props} />
        </MemoryRouter>
      )
      .toJSON()

    expect(BeerListComponent).toMatchSnapshot()
  })

  it('fetching', () => {
    const nextProps = {
      ...props,
      beers: {
        ...props.beers,
        isFetching: true,
      },
    }
    const beerList = mount(
      <MemoryRouter>
        <BeerList {...nextProps} />
      </MemoryRouter>
    )
    expect(beerList.find('.ant-list').hasClass('ant-list-loading')).toEqual(
      true
    )
  })
})
