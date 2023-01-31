import React, { useState, Component } from 'react';
import {BrowserRouter as Router, Routes, Route, useHistory} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      golfer: {}
     };
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      golfer: data
    })
  };

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    golfer: {}
    })
  };

  loginStatus = () => {
    axios.get('http://localhost:3001/api/v1/logged_in?api_key='.concat(process.env.REACT_APP_API_KEY), 
   {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  componentDidMount() {
    this.loginStatus()
  };
  
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/login' exact element={<Login/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
