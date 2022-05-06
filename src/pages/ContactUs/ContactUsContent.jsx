import React from "react"


const ContactUsContent = () => {
  return (
    <div className="contactuscontent_wrapper">
      <div className="contactuscontent_input_wrapper">
        <label>Your name</label>
        <input />
        <label>Email Address</label>
        <input />
        <label>Phone(optional)</label>
        <input />
        <label>Company(optional)</label>
        <input />
        <label>Message</label>
        <input />
        <button>Send Message</button>
      </div>
      <div className="google_map">
        <iframe src="https://maps.google.com/maps?q=teryan%20105/&hl=en&t=&z=13&ie=UTF8&iwloc=&output=embed" className="google_iframe" title="loaction"  />
      </div>

    </div>
  )
}

export default ContactUsContent
