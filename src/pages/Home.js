import React from 'react'
import '../styles/home.css'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {useNavigate} from 'react-router-dom'
import DashboardOption from '../components/DashboardOption';
import Login from '../components/Login';
import {useSelector} from 'react-redux'
export default function Home() {
    const navigate = useNavigate()
    const showLogin = useSelector((state)=>state.behaviours.showLogin)
  return (
    <div className='home'>
        <div className='home-content-actions'>
             <p>Welcom to Karenic</p>
            <div className='home-content-top'>
                <DashboardOption
                Icon={HealthAndSafetyIcon}
                bgColor='#129610'
                textColor={'white'}
                text='Symptom Checker'
                isRouting={true}
                navigateUrl='symptom'
                />
                <DashboardOption
                Icon={ReportProblemIcon}
                bgColor='#E81E1E'
                textColor={'white'}
                text='Report Incident'
                navigateUrl={'reportIncident'}
                isRouting={true}
                />
                <DashboardOption
                Icon={LocalHospitalIcon}
                bgColor='#F48825'
                textColor={'white'}
                text='health care practitioner'
                isRouting={false}
                />
                {
                    
                }
            </div>
        </div>
       {showLogin && <Login/>} 
    </div>
  )
}
