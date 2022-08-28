import React, { useState ,useEffect} from 'react'
import '../styles/reportIncident.css'

//Material Ui
import { relationShipOptions,Gender } from '../helpers/ReportIncident-data';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//firebase
import {db} from '../../src/firebase-config';
import {collection,getDocs,addDoc} from 'firebase/firestore';

export default function ReportIncident() {

// Create States 

const [relationship, setRelationship] = useState('');
const [gender, setGender] =useState('');
const [location,setLocation] = useState('')
const [name,setName] = useState('')
const [id,setId] = useState('')
const [time,setTime]=useState('');

// Get firebase Collection
const recordCollectionRef = collection(db,"reportedIncident");

// //Retrieve data
// useEffect(()=>{
//   const getRecords = async ()=>{
//       const data = await getDocs(recordCollectionRef);
//       recordCollectionRef(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      
//   };
//   getRecords();
// },[]);

// Add records to firebase collection
  const submitRecord= async ()=>{
    console.log({patient_gender:gender,patient_id:id,patient_location:location,patient_name:name,relationship_to_patient:relationship,time:time})
   await addDoc(recordCollectionRef,{patient_gender:gender,patient_id:id,patient_location:location,patient_name:name,relationship_to_patient:relationship,time:time});
  };



  return (
    <div className='report'>

        <h2>Patient Information</h2>
        <div className="form">
          <form>
    
              <TextField 
                    label='Slelect relationship to patient'
                    select
                    onChange={(event)=>{setRelationship(event.target.value)}}
                  >{relationShipOptions && relationShipOptions.map((option)=>(
                    <MenuItem value={option.relationShip}>{option.relationShip}
                    </MenuItem>
                    ))}
              </TextField>

              <TextField 
              label='Enter Patient name if known'
              onChange={(event)=>{setName(event.target.value)}}

              />

              <TextField 
              label='Enter id number if known'
              onChange={(event)=>{setId(event.target.value)}}

              />

              <TextField label='Select Gender'
                select
                onChange={(event)=>{setGender(event.target.value)}}
              >
              {Gender && Gender.map((option)=>(
                      <MenuItem value={option.gender}>{option.gender}</MenuItem>
                  ))}
              </TextField>

              <TextField 
                label='Enter location'
                onChange={(event)=>{setLocation(event.target.value)}}

                />
              
              <TextField
                onChange={(event)=>{setTime(event.target.value)}}
                id="datetime-local"
                label="Date & time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button onClick={submitRecord} className='sendButton'>Send</Button>
          </form>
      </div>
   
    </div>
  )
}
