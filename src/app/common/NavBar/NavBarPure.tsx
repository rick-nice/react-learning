import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd'

import './NavBar.css'

interface IProps {
  loadRandomBeer: () => void
}

const NavBarPure = ({ loadRandomBeer }: IProps) => {
  const onRandomClick = () => loadRandomBeer()

  return (
    <div>
      <div className='logo'>
        <Link to='/'>Beer</Link>
      </div>
      <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
        <Menu.Item>
          <Button onClick={onRandomClick}>Random</Button>
        </Menu.Item>
        <Menu.Item>
          <Link to='/favorites'>Favorites</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default NavBarPure
