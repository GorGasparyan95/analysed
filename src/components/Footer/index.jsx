import React from 'react'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Fb } from '../../assets/facebook.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_wrapper'>
        <img src="assets/images/logo2.png" className='footer_logo' />
        <div className='footer_content' >
          <div className='footer_left_content'>
            <div className='footer_menu'>
              <p>About</p>
              <p>Service</p>
              <p>Contact</p>
            </div>
            <div className='footer_input_wrapper'>
              <input className='footer_input' />
              <button className='footer_btn'>Subscribe</button>
            </div>
          </div>
          <div className='footer_right_content'>
            <p>info@analysed.ai</p>
            <p>68 a Teryan str. 0009 Yerevan, Armenia</p>
            <p>+(374) 55 303 516</p>
            <div>
              <Linkedin />
              <Fb />
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Footer