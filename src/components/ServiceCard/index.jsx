import React from 'react'


const ServiceCard = ({ icon, title, description }) => {

  return (
    <div className='servicecard_main'>
      <div className='servicecard'>
        {icon}
        <h2 className='servicecard_title'>{title}</h2>
      </div>
      <div className='servicecard_text'>{description}</div>
      <button className="main_services_btn_mob">More</button>
    </div>
  )
}

export default ServiceCard