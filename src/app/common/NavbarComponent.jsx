import React from 'react'
import { Menu, Layout, Button } from 'antd'
import PropTypes from 'prop-types'

import './Navbar.css'

const { Header } = Layout

const NavbarComponent = ({ getRandomBeer }) => {
  const onBtnClick = () => getRandomBeer()
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item>
          <Button onClick={onBtnClick}>Random</Button>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

NavbarComponent.propTypes = { getRandomBeer: PropTypes.func.isRequired }

export default NavbarComponent
