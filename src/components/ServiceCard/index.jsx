import React from 'react'


const ServiceCard = ({icon, title, description}) => {

  return (
   <div className='servicecard_main'>
     <div className='servicecard'>
     {icon}
       <h2 >{title}</h2>
     </div>
     <div>{description}</div>
   </div>
  )
}

export default ServiceCard