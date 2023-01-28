import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return (
    <div className="auth-form-container">
        <h1>LOG IN</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input defaultValue={email} type="email" placeholder="E-mail address" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input defaultValue={password} type="password" placeholder="********" id="password" name="password"/>
            <button className="submit-button" type="submit" fullWidth>Log In</button>
        </form>
        <Link className="redirect-link" to="/register">Don't have an account set up? Register here.</Link>
    </div>
  )
}