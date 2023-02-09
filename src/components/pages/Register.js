import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css'
import { withRouter } from '../withRouter';

function Register(props) {
  const [first_name, setFirst_name] = useState('');

  const [last_name, setLast_name] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [password_confirmation, setPassword_confirmation] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target
    switch (name) {
      case 'first_name': 
        setFirst_name(value)
        break;
      case 'last_name':
        setLast_name(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password_confirmation':
        setPassword_confirmation(value);
        break;
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let golfer = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    
    let url = 'https://kpc-backend.herokuapp.com/api/v1/golfers?api_key='.concat(process.env.REACT_APP_API_KEY)

    axios.post(url, {golfer}, {withCredentials: true}).then(response => {
      if (response.data.data.id) {
          props.navigate('/login');
      }
    }).catch(error => console.log('api errors:', error))
  };

  return (
    <div className='register'>
        <div className="auth-form-container">
            <h1>REGISTER</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="first_name">First name</label>
                <input defaultValue={first_name} type="text" placeholder="First name" id="first_name" name="first_name" onChange={handleChange}/>
                <label htmlFor="last_name">Last name</label>
                <input defaultValue={last_name} type="text" placeholder="Last name" id="last_name" name="last_name" onChange={handleChange}/>
                <label htmlFor="email">E-mail</label>
                <input defaultValue={email} type="text" placeholder="E-mail address" id="email" name="email" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input defaultValue={password} type="password" placeholder="********" id="password" name="password" onChange={handleChange}/>
                <label htmlFor="passwordConfirmation">Confirm password</label>
                <input defaultValue={password_confirmation} type="password" placeholder="********" id="password_confirmation" name="password_confirmation" onChange={handleChange}/>
                <button className="submit-button" type="submit">Register</button>
            </form>
            <Link className="redirect-link" to="/login">Already have an account set up? Log in here.</Link>    
        </div>
    </div>
  );
}

export default withRouter(Register);