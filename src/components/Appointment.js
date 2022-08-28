import React from 'react'
import '../styles/appointment.css'
import Button from '@mui/material/Button';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {useNavigate,useParams} from 'react-router-dom'

export default function Appointment({name,date,time}) {
  const {patientId} = useParams()
  const navigate = useNavigate()
  return (
    <div className='appointment'>
        {/*  clicking on an appointment will display patient details*/}
        <p>Nonelela Cele</p>
        <p>31 August 2022</p>
        <p>10AM</p>
        <div>
            <Button startIcon={<TaskAltIcon/>}
             className='complete'
             
             onClick={()=>navigate(`/patients/${patientId}`)}
             >View</Button>
             {/* clicking here will remove the appointment */}

        </div>
    </div>
  )
}
