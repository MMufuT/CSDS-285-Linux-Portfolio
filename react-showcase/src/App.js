import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//views
import Home from './views/Home.js'
import SystemHealthDashboard from './views/SystemHealthDashboard.js'
import PhotoBackup from './views/PhotoBackup.js'
import Cleanup from './views/Cleanup.js'
import ServerHealthCheck from './views/ServerHealthCheck.js'
import DoOrDie from './views/DoOrDie.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SystemHealthDashboard" element={<SystemHealthDashboard />} />
        <Route path="/PhotoBackup" element={<PhotoBackup />} />
        <Route path="/Cleanup" element={<Cleanup />} />
        <Route path="/ServerHealthCheck" element={<ServerHealthCheck />} />
        <Route path="/DoOrDie" element={<DoOrDie />} />
      </Routes> 
    </Router>
  );
}

export default App;
