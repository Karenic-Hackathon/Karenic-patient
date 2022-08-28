import React from 'react'
import '../styles/appointment.css'
import Button from '@mui/material/Button';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
export default function Appointment() {
  return (
    <div className='appointment'>
        {/*  clicking on an appointment will display patient details*/}
        <p>Nonelela Cele</p>
        <p>31 August 2022</p>
        <p>10AM</p>
        <div>
            <Button startIcon={<TaskAltIcon/>} className='complete'>View</Button>
             {/* clicking here will remove the appointment */}

        </div>
    </div>
  )
}
