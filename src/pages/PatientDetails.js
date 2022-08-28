import React from 'react'
import '../styles/patientDetails.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import HistoryRecordModal from '../components/HistoryRecordModal';
import {useDispatch,useSelector} from 'react-redux'
import { openAddModal } from '../state/slices/behaviorSlice';
export default function PatientDetails() {
    const showAddModal = useSelector((state)=> state.behaviours.addModalShow)
    const dispatch = useDispatch()
    
  return (
    <div className='details' id='medicalRecord'>
        <h2>Medical Record</h2>
        <div className='details-container'>
            <div className='top'>
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
             </div>
        </div>
        {
            showAddModal && <HistoryRecordModal/>
        }
    </div>
  )
}
