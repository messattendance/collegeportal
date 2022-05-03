import { BrowserRouter as Router , Routes , Route} from 'react-router-dom' 
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Allmess from './components/Allmess';
import Feedback from './components/Feedback';
import Complaints from './components/Complaints';
import AttendanceDetails from './components/AttendanceDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard/>} />
          <Route path='/attendance' exact element={<Attendance/>} />
          <Route path='/allmess' exact element={<Allmess/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/complaints' element={<Complaints/>} />
          <Route path='/attendancedetails/:date/:type' element={<AttendanceDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
