
import './App.css';
import Body from './Components/Body/Body';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/" element={<Login />} /> 

     <Route path="/body" element={<Body />} /> 
   
   
      </Routes>
      </div>
    </Router>
  );
}

export default App;
