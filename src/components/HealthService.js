import React from 'react'
import '../styles/healthService.css'
export default function HealthService({service,Icon,background}) {
  return (
    <div className='service' style={{background:`${background}`}}>
        {Icon &&<Icon/>}
        <p>{service && service}</p>
    </div>
  )
}
