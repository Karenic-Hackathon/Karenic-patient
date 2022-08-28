import React from 'react'
import '../styles/doctorDetails.css'
import doctor from '../assets/images/doctor.png'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Button } from '@mui/material';
import BookingModal from '../components/BookingModal';
import {useSelector,useDispatch} from 'react-redux'
import { openBookinModal } from '../state/slices/behaviorSlice';
const DetailOption = ({Icon,text,IconColor,color})=>{
  return(
    <div className='detailOption'>
        <div style={{backgroundColor:`${IconColor?IconColor:''}`,color:`${color?color:''}`}}>
          {Icon && <Icon fontSize='small'/>}
        </div>
        <p>{text? text : ''}</p>
    </div>
  )
}

export default function DoctorDetails() {
  const showBookingModal = useSelector((state)=>state.behaviours.showBookinModal)
  const dispatch = useDispatch()
  return (
    <div className='doctor-details'>
      <h3>Doctor Details</h3>
      <div className='doctor-details-content'>
            <div className='doctor-info'>
              <div className='doctor-details-image'>
                <img src={doctor}/>
              </div>
                <h3>Dr Smith Jen</h3>
                <div className='more-info'>
                  <DetailOption
                  Icon={LocalPhoneIcon}
                  text='+21466798521'
                  />
                  <DetailOption
                  Icon={EmailIcon}
                  text='smithjen@livingston.co.za'
                  />
                  <DetailOption
                  Icon={LocalHospitalIcon}
                  text='Livingston hospital'
                  />
                  <DetailOption
                  Icon={FmdGoodIcon}
                  text='Lindsay Rd, Industrial, Gqeberha, 6020'
                  />
                </div>
                <div className='doctor-stats'>
                    <div className='speciality'>
                      <h4>Speciality</h4>
                      <p>Cancer</p>
                    </div>
                    <div className='surgeries'>
                      <h4>Successful Surgies</h4>
                      <p>7</p>
                    </div>
                </div>
                  <Button className='book-btn' onClick={()=> dispatch(openBookinModal())}>Book Appointment</Button>
            </div>
      </div>
     {showBookingModal &&  <BookingModal/>}
    </div>
  )
}
