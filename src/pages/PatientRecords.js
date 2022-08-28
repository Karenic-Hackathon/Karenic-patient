import React from 'react'
import '../styles/patientRecords.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Patient from '../components/Patient';
function PatientRecords() {

    
  return (
    <div className='records'>
        <div className='records-top'>
            <div className='search-control'>
                <input type={'text'} placeholder='Search by id'/>
                <Button startIcon={<SearchIcon/>} className='search-button'>Search</Button>
            </div>
        </div>

        <div className='record-list'>
            <Patient/>
            <Patient/>
            <Patient/>
        </div></div>
  )
}
export default PatientRecords