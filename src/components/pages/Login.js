import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import '../../App.css';
import { withRouter } from '../../components/withRouter';

function Login(props) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target
    if(name=='email'){
      setEmail(value);
    }else{
      setPassword(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    let golfer = {
      email: email,
      password: password
    }
    
    let url = 'http://localhost:3001/api/v1/login?api_key='.concat(process.env.REACT_APP_API_KEY)
    
    axios.post(url, {golfer}, {withCredentials: true})
        .then(response => {
        if(response.data.data.id) {
            props.handleLogin(response.data.data)
            props.navigate('/dashboard');
        } else {
          setErrors(response.data.errors)
        }
      }
    ) .catch(error => console.log('api errors:', error))
  }

  const handleErrors = () => {
    <div>
      <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
        })}
      </ul>
    </div>
  };
  
  return (
  <div className="login">
      <div className="auth-form-container">
      <h1>LOG IN</h1>
          <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input defaultValue={email} type="text" placeholder="E-mail address" id="email" name="email" onChange={handleChange}/>
              <label htmlFor="password">Password</label>
              <input defaultValue={password} type="password" placeholder="********" id="password" name="password" onChange={handleChange}/>
              <button className="submit-button" type="submit">Log In</button>
          </form>
          <Link className="redirect-link" to="/register">Don't have an account set up? Register here.</Link>
      </div>
  </div>
  );
}

export default withRouter(Login);