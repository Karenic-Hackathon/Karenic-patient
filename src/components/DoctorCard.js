import React from 'react'
import '../styles/doctorCard.css'
import doctor from '../assets/images/doctor.png'
import {useNavigate} from 'react-router-dom'
export default function DoctorCard({fullname,speciality,placeOfWork}) {
      const navigate = useNavigate()
  return (
    <div className='doctor-card' onClick={()=>navigate('/doctors/1234')}>
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
