import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd'

import './NavBar.css'

interface IProps {
  getRandomBeer: () => void
}

const NavBarPure = ({ getRandomBeer }: IProps) => {
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

export default NavBarPure
