import React from 'react'
import '../styles/doctorCard.css'
import doctor from '../assets/images/doctor.png'
export default function DoctorCard({fullname,speciality,placeOfWork}) {
  return (
    <div className='doctor-card'>
        <div className='image-container-doctor'>
            <img src={doctor}/>
        </div>
        <div className='doctor-card-details'>
            <h5>Dr Smith Jen</h5>
            <p>Cancer specialist</p>
            <p>Livingston Hospital</p>
        </div>
    </div>
  )
}
