import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import { withRouter } from './withRouter';
import App from '../App'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: '',
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
        const {email, password} = this.state
        let golfer = {
          email: email,
          password: password
        }
        
        let url = 'http://localhost:3001/api/v1/login?api_key='.concat(process.env.REACT_APP_API_KEY)
        
        axios.post(url, {golfer}, {withCredentials: true})
            .then(response => {
            if (response.data.data.id) {
                // this.props.handleLogin(response.data.data)
                this.props.handleLogin(response.data.data)
                this.props.navigate('/dashboard');
            } else {
                this.setState({
                errors: response.data.errors
                })
            }
            })
            .catch(error => console.log('api errors:', error))
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
        const {email, password} = this.state
        return (
            <div className="auth-form-container">
                <h1>LOG IN</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">E-mail</label>
                    <input defaultValue={email} type="text" placeholder="E-mail address" id="email" name="email" onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                    <input defaultValue={password} type="password" placeholder="********" id="password" name="password" onChange={this.handleChange}/>
                    <button className="submit-button" type="submit">Log In</button>
                </form>
                <Link className="redirect-link" to="/register">Don't have an account set up? Register here.</Link>
            </div>
        );
    }
}

export default withRouter(LoginForm);