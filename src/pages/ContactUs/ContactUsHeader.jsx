import React from "react";
import Header from '../../components/Header'


const ContactUsHeader = () => {
  return (
    <div>
      <Header />
      <div className="contactus_bg">
        <img alt="contactus"  src="assets/images/contactus.png" className="contactus_header_img"/>
        <div className="contactus_title_wrapper">
          <h2 className="contactus_title_contact">Contact</h2>
          <h2 className="contactus_title_us">us</h2>
        </div>
      </div>
    </div>
  )
}

export default ContactUsHeader