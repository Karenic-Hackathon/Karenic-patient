import {React,useState,useEffect} from 'react';
import '../styles/patientRecords.css';

//firebase
import {db} from '../../src/firebase-config';
import {collection,getDocs} from 'firebase/firestore';
// import {ref,uploadBytes,listAll} from 'firebase/storage';

//Material UI
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import '../styles/patient.css';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function PatientRecords() {

    //states
    const [thepatients,setPatients]=useState([]);
    const [query,setQuery] = useState("");

    //firestore collection
    const patientsRef = collection(db,"patients");

    // const [image,setImage] = useState([]);
    // const imageRef = storage(ref);


    //Fetch data from firestore
    useEffect(()=>{
        const getPatients = async ()=>{
            const data = await getDocs(patientsRef);
             console.log(data);
            setPatients(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
            
        };
        getPatients();
    },[]);

    //keys for accurate search filter
    const searchKeys = ["patient_fname","patient_lname","patient_id","patient_gender","patient_occupation"]
    
    const search = (data)=>{
        return data.filter((patient)=>
        searchKeys.some((key)=>
        patient[key].toLowerCase().includes(query))
        );
    }

    //Get year
    var today = new Date();
    var thisYear = today.getFullYear();

  return (
    <div className='container'>
        <div className="search">
            <TextField
                className='search_input'
                id="outlined-helperText"
                label="Search Patient"
                onClick={(e)=>setQuery(e.target.value)} 
                onChange={(e)=>setQuery(e.target.value)} 
            />                
            <Button startIcon={<SearchIcon/>}>Search</Button>
        </div>

        <div className='record-list'>
            <ul>
                 { 
                    search(thepatients).map((patient)=>{
                    return <li key ={patient.patient_id} className="patients_list">
                            <div className='patient'>
                    <div className='image-container'>
                        <img src="../../assets/images/boy1.jpg" alt={patient.patient_fname}/>
                    </div>
                    <div className='patient-bottom'>
                        <h4>ID: {patient.patient_id}</h4>
                        <h4>Names: {patient.patient_fname} {patient.patient_lname}</h4>
                        <h4>Age:{thisYear-patient.patient_dob.substring(0,4)} years old</h4>
                        <h4>Gender: {patient.patient_gender}</h4>
                        <h4>Occupation: {patient.patient_occupation}</h4>
                    </div>
                    
                    <div className='btn-container'>
                        <Button endIcon={<ReadMoreIcon/>} className='viewMoreBtn'>View</Button>
                    </div>
                     </div>
                        </li>  
                       })

                        
                    }
                
                 
        </ul>
     
            
        </div>
    </div>
  )
}

export default PatientRecords

