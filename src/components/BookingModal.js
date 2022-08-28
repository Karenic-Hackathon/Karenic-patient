import React,{useState} from 'react'
import '../styles/bookingModal.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useDispatch} from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { closeBookinModal } from '../state/slices/behaviorSlice';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { Button, IconButton } from '@mui/material';

export default function BookingModal() {
     const [appointmentDate, setDate] = React.useState(null);
    const dispatch = useDispatch()
    const [idNumber,setIdNumber]=useState('')
    const [time,setTime]=useState('')
    const [name,setName] = useState('')

      const getDate = (newDate) => {
        
    setDate(newDate);
    console.log(appointmentDate.$d)
  };

const selectTime = (event) => {
     setTime(event.target.value);
  };
  
  const handleBooking = () =>{
  dispatch(closeBookinModal())
  }
  return (
    <div className='booking-modal'>
        <div className='booking-content'>
            <div className='booking-top'>
                <h4>Appointment</h4>             
                <IconButton onClick={()=>dispatch(closeBookinModal())}>
                    <CloseIcon fontSize='large' />
                </IconButton>
            </div>
            <form>
                <TextField 
                label='ID number'
                fullWidth
                onChange={(e)=>setIdNumber(e.target.value)}
                />
                <TextField 
                label='FullName'
                fullWidth
                onChange={(e)=>setName(e.target.value)}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={appointmentDate}
                    onChange={getDate}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                </LocalizationProvider>

        <TextField label='Appointment Time'
         select
         onChange={selectTime}
         fullWidth
        >     
        <MenuItem value={'08:00'}>08:00 AM</MenuItem>
        <MenuItem value={'10:00'}>10:00 AM</MenuItem>
        <MenuItem value={'01:00'}>01:00 PM</MenuItem>
        </TextField>
        <Button className='confirmBooking' onClick={handleBooking}>Confirm Booking</Button>
        </form>
        </div>
    </div>
  )
}
