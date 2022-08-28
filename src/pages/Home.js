import React from 'react'
import '../styles/home.css'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import HealthService from '../components/HealthService';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div className='home'>
        <div className='home-content-actions'>
             <p>Welcome to Karenic</p>
            <div className='reportActions home-content-top'>
                <div className='symtom-checker'>
                    <HealthAndSafetyIcon fontSize='large' />
                    <h2>symtom Checker</h2>
                </div>
                <div className='report-incident' onClick={()=>navigate('/reportIncident')}>
                    <ReportProblemIcon fontSize='large' />
                    <h2>Report incident</h2>
                </div>
                <div className='report-incident'>
                    <LocalHospitalIcon fontSize='large' />
                    <h2>Doctor Dashboard</h2>
                </div>
            </div>
        </div>
                           
    </div>
  )
}
