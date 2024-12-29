import React, { useEffect, useState } from 'react';

import { Button, Input } from '../../components';
import Typography from '../../components/Typography/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/slices/AuthSlice';
import { emailRegex, passwordRegex } from '../../helpers/regex';
import "./RegisterForm.css"

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error: reduxError } = useSelector((state) => state.auth);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassoword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password and confirm password is not same');
            return;
        }
        if (!emailRegex.test(email)) {
            setError('Email is invalid');
            return
        }

        if (!passwordRegex.test(password)) {
            setError('password must be 8+ chars, include upper/lower, number, and special char"');
            return
        }
        setError('');
        try {
            const response = await dispatch(register({ email, password, fullName })).unwrap();
            response && navigate("/candidate")
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
        <div >
            <Typography>Welcome to Dashboard</Typography>
            <form onSubmit={handleSubmit}>
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
                <div className='registerButton'>

                    <Button onSubmit={handleSubmit}>SignUp</Button>
                </div>
            </form>
            <div>
                <Typography type="caption">Already have an account?<Link to="/login" className='registerLabel' >Login</Link></Typography>
            </div>
        </div>
    );
};

export default RegisterForm;