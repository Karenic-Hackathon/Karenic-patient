import React, { useState } from 'react'
import '../styles/historyRecordModal.css'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useDispatch} from 'react-redux'
import { closeAddModal } from '../state/slices/behaviorSlice';
export default function HistoryRecordModal() {
    const [reason,setReason]=useState('')
    const [medication,setMedication]=useState('')
    const [location,setLocation]=useState('')
    const [doctor,setDoctor]=useState('')
    const dispatch = useDispatch()

    const addVisit =() =>{
        dispatch(closeAddModal())
    }
  return (
    <div className='modalRoot'>
        <div className='new-record'>
            <div className='close-iconContainer' >
                <h4>New Visit Record</h4>
                
                <div onClick={()=>dispatch(closeAddModal())}>
                    <CloseIcon fontSize='large' />
                </div>
            </div>
            <form>
                <TextField 
                label='Reason'
                fullWidth
                onChange={(e)=>setReason(e.target.value)}
                />
                <TextField 
                label='Prescribed Medication'
                fullWidth
                onChange={(e)=>setMedication(e.target.value)}
                />
                <TextField 
                label='Location' 
                fullWidth
                onChange={(e)=>setLocation(e.target.value)}
                />
                <TextField
                 label='Doctor'
                  fullWidth
                onChange={(e)=>setDoctor(e.target.value)}
                  />
                <div className='new-record-buttons'>
                    <Button className='cancelBtn' onClick={()=>dispatch(closeAddModal())}> Cancel</Button>
                    <Button className='addBtn' onClick={()=>addVisit()}> Add Visit</Button>                
                </div>
            </form>
        </div>
    </div>
  )
}
