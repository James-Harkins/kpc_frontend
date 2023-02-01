import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import UnauthNavbar from './components/UnauthNavbar';
import AuthNavbar from './components/AuthNavbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      golfer: {}
     };
  };

  handleLogin = (data) => {
    debugger;
    this.setState({
      isLoggedIn: true,
      golfer: data
    })
    debugger;
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
          {this.state.isLoggedIn ? <AuthNavbar /> : <UnauthNavbar/>}
          {/* <UnauthNavbar /> */}
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/register' exact element={<Register authStatus={this.props.isLoggedIn} authGolfer={this.props.golfer}/>}/>
            <Route path='/login' exact element={<Login handleLogin={this.handleLogin} authStatus={this.props.isLoggedIn} authGolfer={this.props.golfer}/>}/>
            <Route path='/dashboard' exact element={<Dashboard handleLogin={this.handleLogin} authStatus={this.props.isLoggedIn} authGolfer={this.props.golfer}/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
