import React, { useState } from 'react';

import { Button, Input } from '../../components';
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/AuthSlice';

const RegisterForm = () => {
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassoword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }

        setError('');
        dispatch(register({ email, password,fullName }))

    };

    return (
        <div className="login-form-container">
            <Typography>Welcome to Dashboard</Typography>
            <form onSubmit={handleSubmit} className="login-form">
                <Input
                    label
                    type="text"
                    id="fullName"
                    labelText="Full name"
                    placeholder="Full name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />

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
                <Input
                    label
                    labelText="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassoword(e.target.value)}
                    value={confirmPassword}
                />

                {error && <div className="error">{error}</div>}
                <div className='loginButton'>

                    <Button onSubmit={handleSubmit}>Login</Button>
                </div>
            </form>
            <div>
                <Typography type="caption">Already have an account?<Link to="/login" className='registerLabel' >Login</Link></Typography>
            </div>
        </div>
    );
};

export default RegisterForm;