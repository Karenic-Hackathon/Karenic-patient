import React, { useState } from 'react'
import '../styles/reportIncident.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { relationShipOptions,Gender } from '../helpers/ReportIncident-data';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ReportIncident() {
const [relationship, setRelationship] = React.useState('');
const [gender, setGender] = React.useState('');
const [location,setLocation] = useState('')
const [name,setName] = useState('')
const [id,setId] = useState('')

 const selectRelationship = (event) => {
    setRelationship(event.target.value);
  };
   const selectGender = (event) => {
    setGender(event.target.value);
  };

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
        <TextField label='Enter location'/>
      <Button type='submit' className='sendButton'>Send</Button>
    </form>
    </div>
  )
}
