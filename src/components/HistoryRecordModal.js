import React, { useEffect, useState } from 'react'
import '../styles/historyRecordModal.css'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useDispatch} from 'react-redux'
import { closeAddModal } from '../state/slices/behaviorSlice';
import { IconButton } from '@mui/material';
import {useParams} from 'react-router-dom'
export default function HistoryRecordModal() {
    const {patientId} = useParams()
    const [reason,setReason]=useState('')
    const [medication,setMedication]=useState('')
    const [location,setLocation]=useState('')
    const [doctor,setDoctor]=useState('')
    const dispatch = useDispatch()

    const addVisit =() =>{
        //add visit information to firebase
        dispatch(closeAddModal())
        
    }

    useEffect(()=>{
        // fetch patient data from firebase based on the patient id

    },[])

  return (
    <div className='modalRoot'>
        <div className='new-record'>
            <div className='close-iconContainer' >
                <h4>New Visit Record</h4>
                
                <IconButton onClick={()=>dispatch(closeAddModal())}>
                    <CloseIcon fontSize='large' />
                </IconButton>
            </div>
            <form>
            {/* date is not icluded since a visit record is recorded at the time of visit\
             we use code to add date
            */}
                <TextField 
                label='Reason'
                fullWidth
                onChange={(e)=>setReason(e.target.value)}
                required
                />
                <TextField 
                label='Prescribed Medication'
                fullWidth
                onChange={(e)=>setMedication(e.target.value)}
                required
                />
                <TextField 
                label='Location' 
                fullWidth
                required
                onChange={(e)=>setLocation(e.target.value)}
                />
                <TextField
                 label='Doctor'
                 required
                  fullWidth
                onChange={(e)=>setDoctor(e.target.value)}
                  />
                <div className='new-record-buttons'>
                    <Button className='cancelBtn' type='submit' onClick={()=>dispatch(closeAddModal())}> Cancel</Button>
                    <Button className='addBtn' onClick={()=>addVisit()}> Add Visit</Button>                
                </div>      
            </form>
        </div>
    </div>
  )
}
