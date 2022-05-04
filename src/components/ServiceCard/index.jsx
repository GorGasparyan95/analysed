import React from 'react'


const ServiceCard = ({ icon, title, description, line2, line3, displaybtn, servicehome }) => {

  return (
    <div className='servicecard_main'>
      <div className='servicecard'>
        {icon}
        <h2 className='servicecard_title'>{title}</h2>
      </div>
      <div className={servicehome ? 'servicecard_text' : 'servicescard_text'}>{description}</div>
      {line2 && <div className={servicehome ? 'servicecard_text' : 'servicescard_text'}>{line2}</div>}
      {line3 && <div className={servicehome ? 'servicecard_text' : 'servicescard_text'}>{line3}</div>}
      {displaybtn && <button className="main_services_btn_mob">More</button>}
    </div>
  )
}

export default ServiceCard