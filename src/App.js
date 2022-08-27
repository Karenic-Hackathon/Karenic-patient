
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import ReportIncident from './pages/ReportIncident';
function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header/>
          <div className='app-content'>
            <Routes>
                
                  <Route path='/' element={<Home/>}/>
                  <Route path='/reportIncident' element={<ReportIncident/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
