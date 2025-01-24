import React from 'react';
import { Button, Sidebar, Typography } from '../../components';
import "./Logout.css"
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const navigate = useNavigate()


    const handleLogout = () => {

        localStorage.removeItem('userInfo');
        sessionStorage.removeItem('userInfo');
        navigate("/login")
    };

    const handleCancel = () => {
        navigate("/candidate")
    };

    return (
        <Sidebar>
            <div className="logoutPage">
                <div className="logoutBox">
                    <div className="logoutBoxLabel">
                        <Typography type="subHeading">Log out</Typography>
                    </div>
                    <div>
                        <h4 >Are you sure you want to log out?</h4>
                        <div className="logoutButtons">
                            <Button onSubmit={handleLogout}>Logout</Button>
                            <Button onSubmit={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
};

export default LogoutPage;
