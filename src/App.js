
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import ReportIncident from './pages/ReportIncident';
import PatientRecords from './pages/PatientRecords';
import PatientDetails from './pages/PatientDetails';
import DoctorDashBoard from './pages/Doctor';
import DoctorsList from './pages/DoctorsList';
import DoctorDetails from './pages/DoctorDetails';
function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header/>
          <div className='app-content'>
            <Routes>         
                  <Route path='/' element={<Home/>}/>
                  <Route path='/reportIncident' element={<ReportIncident/>}/>
                  <Route path='/patients/records' element={<PatientRecords/>}/>
                  <Route path='/patients/:id' element={<PatientDetails/>}/>
                  <Route path='/doctor' element={<DoctorDashBoard/>}/>
                  <Route path='/doctors' element={<DoctorsList/>}/>
                  <Route path='/doctors/:id' element={<DoctorDetails/>}/>
            </Routes>
          </div>
        </BrowserRouter>
        {/* Footer here */}
    </div>
  );
}

export default App;
