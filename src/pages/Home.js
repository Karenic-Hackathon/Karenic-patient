import React from 'react'
import '../styles/home.css'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {useNavigate} from 'react-router-dom'

import DashboardOption from '../components/DashboardOption';
import Login from '../components/Login';
import {useSelector} from 'react-redux'
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
export default function Home() {
    const navigate = useNavigate()
    const showLogin = useSelector((state)=>state.behaviours.showLogin)
    const currentUser = useSelector((state)=>state.user.user)

  return (
    <div className='home'>
        <div className='home-content-actions'>
             <p>Welcom to Karenic</p>
            <div className='reportActions home-content-top'>
                <div className='symtom-checker' onClick={()=>navigate('/reportIncident')}>
                    <HealthAndSafetyIcon fontSize='large' />
                    <h2>symtom Checker</h2>
                </div>
                <div className='report-incident'>
                    <ReportProblemIcon fontSize='large' />
                    <h2>Report incident</h2>
                </div>
                <div className='report-incident'>
                    <LocalHospitalIcon fontSize='large' />
                    <h2>Doctor Dashboard</h2>
                </div>
            </div>
        </div>
        <div className='home-bottom-content'>
                <p>Health Services</p>
                <div className='services'>
                    {/* Possibly Read these from a simple data array or db*/}
                    <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                    <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                    <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                    <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                                         <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                                         <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                                         <HealthService 
                    service={'Medical Record'}
                     background='lightgray'
                     Icon={ReportProblemIcon}/>
                </div>
        </div>
    </div>
  )
}
