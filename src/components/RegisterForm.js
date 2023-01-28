import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css'

export default function RegisterForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return (
    <div className="auth-form-container">
        <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input defaultValue={firstName} type="firstName" placeholder="First name" id="firstName" name="firstName"/>
            <label htmlFor="lastName">Last name</label>
            <input defaultValue={lastName} type="lastName" placeholder="Last name" id="lastName" name="lastName"/>
            <label htmlFor="email">E-mail</label>
            <input defaultValue={email} type="email" placeholder="E-mail address" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input defaultValue={password} type="password" placeholder="********" id="password" name="password"/>
            <label htmlFor="passwordConfirmation">Confirm password</label>
            <input defaultValue={passwordConfirmation} type="passwordConfirmation" placeholder="********" id="passwordConfirmation" name="passwordConfirmation"/>
            <button className="submit-button" type="submit">Register</button>
        </form>
        <Link className="redirect-link" to="/login">Already have an account set up? Log in here.</Link>    
    </div>
  )
}