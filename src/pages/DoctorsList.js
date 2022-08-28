import { Button } from '@mui/material'
import React from 'react'
import DoctorCard from '../components/DoctorCard'
import '../styles/doctorsList.css'
export default function DoctorsList() {
  return (
    <div className='doctor-list'>
        <div className='doctor-list-top'>
            <h3>Find a doctor</h3>
            <div className='find-doctor-search'>
                <input type={'text'} placeholder='Search by name or speciality'/>
                <Button className='doctorSearchBtn'>Search</Button>
            </div>
        </div>
        <div className='doctor-listing'>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
        </div>
    </div>
  )
}
