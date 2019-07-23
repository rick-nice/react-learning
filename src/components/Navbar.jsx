import React from 'react'
import { Menu, Layout, Button } from 'antd'
import PropTypes from 'prop-types'

import './Navbar.css'

const { Header } = Layout

const Navbar = ({ getRandomBeer }) => {
  const onBtnClick = () => getRandomBeer('random')
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="random">
          <Button onClick={onBtnClick}>Random</Button>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

Navbar.propTypes = { getRandomBeer: PropTypes.func.isRequired }

export default Navbar
