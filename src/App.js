import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UnauthNavbar from './components/UnauthNavbar';
import AuthNavbar from './components/AuthNavbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Trips from './components/pages/Trips';
import TripRegister from './components/pages/TripRegister';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [golfer, setGolfer] = useState({});

  const [nextTrip, setNextTrip] = useState({});

  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setGolfer(data)
  };

  const handleLogout = () => {
    setIsLoggedIn(false)
    setGolfer({});
  };

  const getNextTrip = () => {
    axios.get('http://localhost:3001/api/v1/next_trip?api_key='.concat(process.env.REACT_APP_API_KEY), 
    {withCredentials: true})    
    .then(response => {
      setNextTrip(response.data.data)
    })
  };

  const refreshGolfer = () => {
    axios.get('http://localhost:3001/api/v1/login_status', 
    {withCredentials: true})    
    .then(response => {
      if (response.data.data.id) {
        setIsLoggedIn(true)
        setGolfer(response.data.data)
      } else {
        setIsLoggedIn(false)
        setGolfer(response.data.data)
      }
    })
  }

  useEffect(() => {
    getNextTrip();
  }, []);
    
  return (
    <>
      <Router>
        {isLoggedIn ? <AuthNavbar handleLogout={handleLogout}/> : <UnauthNavbar/>}
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/login' exact element={<Login handleLogin={handleLogin}/>}/>
          <Route path='/trips' exact element={
            isLoggedIn ? 
            <Trips golfer={golfer} nextTrip={nextTrip}/> 
            : 
            <Navigate to="/login" replace={true} />
          }/>
          <Route path='/trip_register' exact element={
            isLoggedIn ?
            <TripRegister golfer={golfer} nextTrip={nextTrip} refreshGolfer={refreshGolfer}/>
            :
            <Navigate to="/login" replace={true} />
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
