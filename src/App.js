
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import ReportIncident from './pages/ReportIncident';
import FindPatient from './pages/findPatient';
function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header/>
          <div className='app-content'>
            <Routes>
                
                  <Route path='/' element={<Home/>}/>
                  <Route path='/reportIncident' element={<ReportIncident/>}/>
                  <Route path='/findPatient' element={<FindPatient/> }/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
