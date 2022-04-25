import React from 'react'
import { ReactComponent as Menu } from '../../assets/Group.svg'



const Header = () => {
    return (
        <div className='header'>
            <div className='head_container'>
                <div className='head'>
                  <img className='head_logo' src='./assets/images/logo.png'/>
                </div>
                <h1 className='logo-title'>
                ANALYSED
                </h1>
            </div>
              <div className='menu'>
                <Menu />
              </div>
        </div>
    )
}

export default Header