import React, { useState } from 'react'
import { ReactComponent as Menu } from '../../assets/Group.svg'
import Hamburger from '../Hamburger'


const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <div className='navbar'>
        <img src='./assets/images/logo.png' className='navbar_logo' />
        <div onClick={() => setOpen(true)}>
          <Menu className='navbar_menu' />
        </div>
      </div>
    </>
  )
}

export default Header