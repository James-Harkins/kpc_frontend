import React, { useState, Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

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
    axios.get('http://localhost:3001/api/v1/logged_in?api_key=f61d4767c07c2d2c922e99433bba76c74219feca', 
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
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
