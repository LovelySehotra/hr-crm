import React, { useState } from 'react';
import './LoginForm.css'; // You can style the form with CSS
import { Button, Input } from '../../components';
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        // Clear any previous error messages
        setError('');

        // Simulate API login request (replace this with your actual API call)
        const loginData = { email, password };
        console.log('Logging in with:', loginData);

        // Example: Call your login API and handle response
        // fetch('your-login-endpoint', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(loginData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //   // Handle successful login (redirect, store tokens, etc.)
        // })
        // .catch(error => {
        //   // Handle errors (wrong credentials, server issues, etc.)
        //   setError('Failed to login');
        // });
    };

    return (
        <div className="login-form-container">
           <Typography>Welcome to Dashboard</Typography>
            <form onSubmit={handleSubmit} className="login-form">
                <Input
                    label
                    type="text"
                     id="email"
                    labelText="Email Address"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <Input
                    label
                    labelText="Password"
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                {error && <div className="error">{error}</div>}
            <div className='loginButton'>

               <Button onSubmit={handleSubmit}>Login</Button>
            </div>
            </form>
        <div>
            <Typography type="caption">Don't have an account? <Link className='registerLabel' >Register</Link></Typography>
        </div>
        </div>
    );
};

export default LoginForm;
