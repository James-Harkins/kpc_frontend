import React, { useState, Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: '',
          errors: ''
         };
      }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };

    handleSubmit = (event) => {
        event.preventDefault()
        const {first_name, last_name, email, password, password_confirmation} = this.state
        let golfer = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }

        axios.post('http://localhost:3001/api/v1/golfers?api_key=f61d4767c07c2d2c922e99433bba76c74219feca', {golfer}, {withCredentials: true})
            .then(response => {
            if (response.data.data.id) {
                this.redirect_to_login()
            } else {
                this.setState({
                errors: response.data.errors
                })
            }
            })
            .catch(error => console.log('api errors:', error))
      };
    
    redirect_to_login = () => {
        return Redirect('/login');
      };
    
      handleErrors = () => {
        return (
        <div>
            <ul>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
            })}
            </ul>
        </div>
        )
      };
    
    render() {
        const {first_name, last_name, email, password, password_confirmation} = this.state
        return (
            <div className="auth-form-container">
                <h1>REGISTER</h1>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="first_name">First name</label>
                    <input defaultValue={first_name} type="text" placeholder="First name" id="first_name" name="first_name" onChange={this.handleChange}/>
                    <label htmlFor="last_name">Last name</label>
                    <input defaultValue={last_name} type="text" placeholder="Last name" id="last_name" name="last_name" onChange={this.handleChange}/>
                    <label htmlFor="email">E-mail</label>
                    <input defaultValue={email} type="text" placeholder="E-mail address" id="email" name="email" onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                    <input defaultValue={password} type="password" placeholder="********" id="password" name="password" onChange={this.handleChange}/>
                    <label htmlFor="passwordConfirmation">Confirm password</label>
                    <input defaultValue={password_confirmation} type="password" placeholder="********" id="password_confirmation" name="password_confirmation" onChange={this.handleChange}/>
                    <button className="submit-button" type="submit">Register</button>
                </form>
                <Link className="redirect-link" to="/login">Already have an account set up? Log in here.</Link>    
            </div>
        );
    };
}

export default RegisterForm;