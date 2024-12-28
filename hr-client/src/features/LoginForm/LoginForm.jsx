import React, { useState } from 'react';
import './LoginForm.css';
import { Button, Input } from '../../components';
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';

const LoginForm = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }

        setError('');

        const loginData = { email, password };
        console.log('Logging in with:', loginData);
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
                <Typography type="caption">Don't have an account? <Link to="/register" className='registerLabel' >Register</Link></Typography>
            </div>
        </div>
    );
};

export default LoginForm;
