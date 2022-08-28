import {React,useState,useEffect} from 'react'
import '../styles/patientDetails.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import HistoryRecordModal from '../components/HistoryRecordModal';
import {useDispatch,useSelector} from 'react-redux'
import { openAddModal } from '../state/slices/behaviorSlice';

//firebase
import {collection,getDocs} from 'firebase/firestore';
import {db} from '../../src/firebase-config';

export default function PatientDetails() {

    const [thepatients,setPatients]=useState([]);

    const patientsRef = collection(db,"patients");


    useEffect(()=>{
        const getPatients = async ()=>{
            const data = await getDocs(patientsRef);
             console.log(data);
            setPatients(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
            
        };
        getPatients();
    },[]);

  //Get year
  var today = new Date();
  var thisYear = today.getFullYear();
     

    const showAddModal = useSelector((state)=> state.behaviours.addModalShow)
    const dispatch = useDispatch()
    
  return (
    <div className='details' id='medicalRecord'>
        <h2>Medical Record</h2>
        <div className='details-container'>
        <ul>
        {
            thepatients.map((patient)=>{
                return <li  key ={patient.patient_id} >
                        <div>
                        <div className='top'>
                <div className='biographical-details'>
                    <h4>{patient.patient_id}</h4>
                    <h4>{patient.patient_fname}  {patient.patient_lname}</h4>
                    <h4>Age:{thisYear-patient.patient_dob.substring(0,4)} years old</h4>
                    <h4>Occupation: {patient.patient_occupation}</h4>
                </div>
                <div className='image-store'>
                    <img src='https://statinfer.com/wp-content/uploads/dummy-user.png'/>
                </div>        
            </div>
             <div className='visit-history'>
             <h4>Diagnosis : Asthma </h4>

                <h4>Visit History</h4>
                <div className='visit-history-details'>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Prescription</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>06-03-2022</td>
                            <td>cold</td>
                            <td>06-03-2022</td>
                            <td>Cape Town Hospital</td>
                        </tr>
                    </table>
                    <div className='moreInfo'>
                    <div>
                        <h4>{patient.patient_diagnosis}</h4>
                       
                    </div>
                </div>
                    <Button startIcon={<AddIcon/>}
                    onClick={()=>dispatch(openAddModal())}
                    className='openModalBtn'>Add new record</Button>
                </div>
                
             </div>
                        </div>
                </li>
            })
        }
        </ul>
            {/* <div className='top'>
                <div className='biographical-details'>
                    <h4>810603596897</h4>
                    <h4>Mathew Washinton</h4>
                    <h4>12 years old</h4>
                    <h4>Learner</h4>
                </div>
                <div className='image-store'>
                    <img src='https://statinfer.com/wp-content/uploads/dummy-user.png'/>
                </div>        
            </div>
             <h4>Diagnosis : Asthma </h4>
             <div className='visit-history'>
                <h4>Visit History</h4>
                <div className='visit-history-details'>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Prescription</th>
                            <th>Location</th>
                        </tr>
                        <tr>
                            <td>06-03-2022</td>
                            <td>06-03-2022</td>
                            <td>06-03-2022</td>
                            <td>Cape Town Hospital</td>
                        </tr>
                    </table>
                    <Button startIcon={<AddIcon/> }
                    onClick={()=>dispatch(openAddModal())}
                    className='openModalBtn' id='addBtn'>Add new record</Button>
                </div>
                <div className='moreInfo'>
                    <div>
                        <h4>Allergies</h4>
                        <p>allergies1</p>
                        <p>allergies1</p>
                    </div>
                </div>
             </div> */}
        </div>
        {
            showAddModal && <HistoryRecordModal/>
        }
    </div>
  )
}
