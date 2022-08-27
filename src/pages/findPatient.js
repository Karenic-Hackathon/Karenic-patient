import {React,useState} from "react";
import {patients} from "../data";
import TextField from '@mui/material/TextField';

export default function FindPatient() {
    const [query,setQuery] = useState("");
    return (
      <div>

        <TextField
          id="outlined-helperText"
          label="Search Patient"
          onChange={(e)=>setQuery(e.target.value)} 
        />
       <ul>
        { 
            patients.filter((patient)=>
            patient.patient_id.toLowerCase()
            .includes(query))
            .map((patient)=>(
            <li key ={patient.patient_id} className="patients_list">
                {patient.patient_id}
            </li> 
            ))
        }
      </ul>
      </div>
    )
}
