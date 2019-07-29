import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd'
import PropTypes from 'prop-types'

import './NavBar.css'

const NavBarPure = ({ getRandomBeer }) => {
  const onBtnClick = () => getRandomBeer()

  return (
    <div>
      <div className='logo'>
        <Link to='/'>Beer</Link>
      </div>
      <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
        <Menu.Item>
          <Button onClick={onBtnClick}>Random</Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

NavBarPure.propTypes = { getRandomBeer: PropTypes.func.isRequired }

export default NavBarPure
