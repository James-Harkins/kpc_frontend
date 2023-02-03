import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UnauthNavbar from './components/UnauthNavbar';
import AuthNavbar from './components/AuthNavbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      golfer: {},
      nextTrip: {}
     };
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      golfer: data
    })
    this.getNextTrip();
  };

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    golfer: {}
    })
  };

  setNextTrip = (data) => {
    this.setState({
      nextTrip: data
    })
  }

  getNextTrip = () => {
    axios.get('http://localhost:3001/api/v1/next_trip?api_key='.concat(process.env.REACT_APP_API_KEY), 
   {withCredentials: true})    
    .then(response => {
      debugger;
      this.setNextTrip(response.data)
    })
  }

  // loginStatus = () => {
  //   axios.get('http://localhost:3001/api/v1/logged_in?api_key='.concat(process.env.REACT_APP_API_KEY), 
  //  {withCredentials: true})    
  //   .then(response => {
  //     if (response.data.logged_in) {
  //       this.handleLogin(response)
  //     } else {
  //       this.handleLogout()
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // };

  // componentDidMount() {
  //   this.loginStatus()
  // };
  
  render() {
    return (
      <>
        <Router>
          {this.state.isLoggedIn ? <AuthNavbar handleLogout={this.handleLogout} loginStatus={this.loginStatus}/> : <UnauthNavbar/>}
          <Routes>
            <Route path='/' exact element={<Home loginStatus={this.loginStatus}/>}/>
            <Route path='/register' exact element={<Register authStatus={this.props.isLoggedIn} authGolfer={this.props.golfer}/>}/>
            <Route path='/login' exact element={<Login handleLogin={this.handleLogin} authStatus={this.props.isLoggedIn} authGolfer={this.props.golfer}/>}/>
            <Route path='/dashboard' exact element={this.state.isLoggedIn ? <Dashboard golfer={this.state.golfer} nextTrip={this.state.nextTrip}/> : <Navigate to="/login" replace={true} />}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
