import {React,useEffect,useState} from 'react'
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

//firebase
import {db} from '../../src/firebase-config';

import {collection,getDocs} from 'firebase/firestore';

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

  const [thedoctor,setDoctor]=useState([]);
  const doctorsRef = collection(db,"doctor_details");

   //Fetch data from firestore
   useEffect(()=>{
    const getPatients = async ()=>{
        const data = await getDocs(doctorsRef);
         console.log(data);
         doctorsRef(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        
    };
    getPatients();
},[]);

  const showBookingModal = useSelector((state)=>state.behaviours.showBookinModal)
  const dispatch = useDispatch()
  return (
    <div className='doctor-details'>
      <h3>Doctor Details</h3>
      <ul>
      {
        thedoctor.map((doctor)=>{
          return <li>
          <div className='doctor-details-content'>
            <div className='doctor-info'>
              <div className='doctor-details-image'>
                <img src={doctor}/>
              </div>
                <h3>{doctor.doctor_name}</h3>
                <div className='more-info'>
                  <DetailOption
                  Icon={LocalPhoneIcon}
                  text={doctor.doctor_phone}
                  />
                  <DetailOption
                  Icon={EmailIcon}
                  text={doctor.doctor_email}
                  />
                  <DetailOption
                  Icon={LocalHospitalIcon}
                  text={doctor.doctor_hosptital}
                  />
                  <DetailOption
                  Icon={FmdGoodIcon}
                  text='Lindsay Rd, Industrial, Gqeberha, 6020'
                  />
                </div>
                <div className='doctor-stats'>
                    <div className='speciality'>
                      <h4>{doctor.speciality}</h4>
                    </div>
                    <div className='surgeries'>
                      <h4>Successful Surgies</h4>
                      <p>7</p>
                    </div>
                </div>
                  <Button className='book-btn' onClick={()=> dispatch(openBookinModal())}>Book Appointment</Button>
            </div>
      </div>
          </li>
        })
      }
      
      </ul>
    
     {showBookingModal &&  <BookingModal/>}
    </div>
  )
}
