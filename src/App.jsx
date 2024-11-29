import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Tutor from './pages/Tutor';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScheduleLesson from './pages/ScheduleLesson';




const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <div>
        <Navbar></Navbar>
      </div>
     
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/tutor" element={<Tutor/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/schedule/:tutorid" element={<ScheduleLesson/>}/>
        </Routes>

    
     
      </BrowserRouter>
    </div>
  );
};

export default App;