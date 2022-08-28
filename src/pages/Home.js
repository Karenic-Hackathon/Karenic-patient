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
             <p>Welcome to Karenic</p>
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
                {currentUser && (currentUser.occupation=='Nurse' ||  currentUser.occupation=='Doctor'?
                <DashboardOption
                Icon={PeopleIcon}
                bgColor='#F48825'
                textColor={'white'}
                text='Record Visit'
                isRouting={true}
                navigateUrl='patients/1234'
                />:'')
                }
                {currentUser && (currentUser.occupation=='Doctor'?
                <DashboardOption
                Icon={CalendarMonthIcon}
                bgColor='#F48825'
                textColor={'white'}
                text='View Appointments'
                isRouting={true}
                navigateUrl={'doctor/appointments'}
                />:'')
                }

                {currentUser &&
                 (currentUser.occupation=='Nurse' ||  
                 currentUser.occupation=='Doctor' ||
                  currentUser.occupation=='Paramedic'?
                  <DashboardOption
                  Icon={PeopleIcon}
                  bgColor='#F48825'
                  textColor={'white'}
                  text='View Patients'
                  isRouting={true}
                  navigateUrl='patients/records'
                  />:'')
                }
                  <DashboardOption
                  Icon={MedicalInformationIcon}
                  bgColor='#F48825'
                  textColor={'white'}
                  text='Find a doctor'
                  isRouting={true}
                  navigateUrl='/find/doctors'
                  />           
            </div>
        </div>
       {showLogin && <Login/>} 
    </div>
  )
}
