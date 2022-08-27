import React from 'react'
import Button from '@mui/material/Button';
import '../styles/patient.css'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {useNavigate} from 'react-router-dom'
function Patient() {
    const navigate = useNavigate()

    const goToDetails=(event)=>{
        event.stopPropagation()
        navigate('/')
    }
  return (
    <div className='patient'>
        <div className='image-container'>
            <img src='https://statinfer.com/wp-content/uploads/dummy-user.png'/>
        </div>
        <div className='patient-bottom'>
            <h4>810603596897</h4>
            <h4>Mathew Washinton</h4>
            <h4>12 years old</h4>
            <h4>Learner</h4>
        </div>
        <div className='btn-container'>
            <Button 
            endIcon={<ReadMoreIcon/>} 
            className='viewMoreBtn'
            onClick={(e)=>goToDetails(e)}
            >View</Button>
        </div>
    </div>
  )
}

export default Patient