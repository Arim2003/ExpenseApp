
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/sign' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
