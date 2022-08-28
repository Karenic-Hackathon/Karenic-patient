import React from 'react'
import Appointment from '../components/Appointment'
import '../styles/doctorDashBoard.css'
export default function DoctorDashBoard() {
  return (
    <div className='doctor'>
        <div className='appointments'>   
            <div className='appointments-list'>
                <h3>Upcoming Appointments</h3>
                <div>
                    <Appointment/>
                    <Appointment/>
                    <Appointment/>
                    <Appointment/>
                </div>
            </div>
        </div>
    </div>
  )
}
