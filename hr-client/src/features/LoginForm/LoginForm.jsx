import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import { Button, Input } from '../../components';
import Typography from '../../components/Typography/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/AuthSlice';

const LoginForm = ({ }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { error: reduxError } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        setError('');
        try {
            const response = await dispatch(login({ email, password })).unwrap();
            
            if (response) {
                navigate('/candidate');
            }
        } catch (error) {
            console.log(error)
            setError(error);
        }
    };
    useEffect(() => {
        if (reduxError) {
            setError(reduxError);
        }
    }, [reduxError]);

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
