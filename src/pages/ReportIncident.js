import React, { useState } from 'react'
import '../styles/reportIncident.css'
import MenuItem from '@mui/material/MenuItem';
import { relationShipOptions,Gender } from '../helpers/ReportIncident-data';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

export default function ReportIncident() {
const [relationship, setRelationship] = React.useState('');
const [gender, setGender] = React.useState('');
const [location,setLocation] = useState('')
const [name,setName] = useState('')
const [id,setId] = useState('')
const navigate = useNavigate()

 const selectRelationship = (event) => {
    setRelationship(event.target.value);
  };
   const selectGender = (event) => {
    setGender(event.target.value);
  };

  const handleReport = ()=>{
    toast("Thank you");
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }

  return (
    <div className='report'>
        <h2>Patient Information</h2>
    <form>
   
        <TextField label='Relationship to patient'
         select
         onChange={selectRelationship}
        >
            {      relationShipOptions && relationShipOptions.map((option)=>(
                    <MenuItem value={option.relationShip}>{option.relationShip}</MenuItem>
            ))}
        </TextField>
        <TextField label='Patient Name'/>
        <TextField label='Enter id number'/>
        <TextField label='Gender'
         select
         onChange={selectGender}
        >
        {
            Gender && Gender.map((option)=>(
                <MenuItem value={option.gender}>{option.gender}</MenuItem>
            ))
        }
        </TextField>
        <TextField label='Enter address' required/>
      <Button type='submit' className='sendButton'onClick={handleReport}>Send</Button>

    </form>
         <ToastContainer />
    </div>
  )
}
