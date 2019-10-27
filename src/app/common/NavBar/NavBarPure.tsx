import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd'

import './NavBar.css'

interface IProps {
  requestBeer: (url: string) => void
}

const NavBarPure = ({ requestBeer }: IProps) => {
  const onRandomClick = () => requestBeer('/random')

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
