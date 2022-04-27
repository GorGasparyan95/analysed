import React from 'react'
import { ReactComponent as Menu } from '../../assets/Group.svg'


const Header = () => {
  return (
    <div className='navbar'>
      <img src='./assets/images/logo.png' className='navbar_logo' />
      <div >  
         <Menu className='navbar_menu' />
      </div>
    </div>
  )
}

export default Header