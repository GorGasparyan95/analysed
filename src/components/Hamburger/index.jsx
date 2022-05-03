import React from 'react'
import { ReactComponent as Close } from '../../assets/Vector.svg'
import { Link } from 'react-router-dom'


const Hamburger = ({ setOpen, open }) => {

  return (
    <>
      {open &&
        (<div className='hamburger'>
          <div className='hamburger_menu_icon'>
            <Close onClick={() => setOpen(false)} style={{ width: 36, height: 36 }} />
          </div>
          <div className='hamburger_menu'>
            <Link to="/" className='hamburger_link'>
              Home
            </Link>
            <Link to="/about" className='hamburger_link'>
              <p>About</p>
            </Link>
            <Link to="/services" className='hamburger_link'>
              <p>Services</p>
            </Link>
            {/* <Link>
              <p>Contact</p>
            </Link> */}
          </div>
        </div>)}
    </>
  )
}

export default Hamburger