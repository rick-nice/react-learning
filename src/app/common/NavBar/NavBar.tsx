import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className='logo'>
        <Link to='/'>Beer</Link>
      </div>
      <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
        <Menu.Item>
          <Link to='/beer/:random'>Random</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default NavBar
