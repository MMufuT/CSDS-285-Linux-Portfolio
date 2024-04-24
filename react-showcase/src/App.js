import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//views
import Home from './views/Home.js'
import LargeProj from './views/LargeProj.js'
import SmallProj1 from './views/SmallProj1.js'
import SmallProj2 from './views/SmallProj2.js'
import SmallProj3 from './views/SmallProj3.js'
import SmallProj4 from './views/SmallProj4.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/largeProj" element={<LargeProj />} />
        <Route path="/smallProj1" element={<SmallProj1 />} />
        <Route path="/smallProj2" element={<SmallProj2 />} />
        <Route path="/smallProj3" element={<SmallProj3 />} />
        <Route path="/smallProj4" element={<SmallProj4 />} />
      </Routes> 
    </Router>
  );
}

export default App;
